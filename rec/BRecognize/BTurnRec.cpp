#include "pch.h"
#include "stdafx.h"
#include <list>
#include "StContOut.h"
#include "NCadrGeom.h"
#include "TinyXML.h"
#include "..\NCMb\ConstDef.h"
#include "BMatrPair.h"
#include "BTurnRec.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#define new DEBUG_NEW
#endif

BTurnRec::BTurnRec(const char* exe_path, const char* in, const char* out) : config_(*GenNTiParams())
{
	exe_file_ = CString(exe_path);
	input_file_ = CString(in);
	output_file_ = CString(out);
	left_start_ = false;
	params_.x_min_ = 0.;
	params_.x_max_ = 0.;
	params_.y_min_ = 0.;
	params_.y_max_ = 0.;
	params_.stock_diameter_ = 0.;
	params_.stock_length_ = 0.;
}

int BTurnRec::Proc()
{
	ReadConfig();
	if (ReadInput() == 0)
		return 0;
	if (MakeResult() == 0)
		return 0;
	if(WriteOutput() == 0)
		return 0;
	return 1;
}

int BTurnRec::ReadConfig()
{
	auto ind = exe_file_.ReverseFind('\\');
	if (ind == -1)
		return 0;
	CString path = exe_file_.Left(ind + 1) + _T("Config.xml");
	bool load_ok = config_.LoadFile(path.GetBuffer());
	return load_ok ? 1 : 0;
}

int BTurnRec::ReadInput()
{
	// Returns :
	// 0 - if loading failed 
	CStdioFile f;
	if (!f.Open(input_file_, CFile::typeText | CFile::modeRead)) //открываем входной файл
	{
		return 0;
	}
	const int StrLen = 1024;
	char str[StrLen];
	// skip extra data
	int i = 0;
	for (; i < 3 && f.ReadString(str, StrLen); ++i);
	if (i != 3)
		return 0;
	// read stock diameter
	if (!f.ReadString(str, StrLen))
		return 0;
	params_.stock_diameter_ = atof(str);
	// read stock length
	if (!f.ReadString(str, StrLen))
		return 0;
	params_.stock_length_ = atof(str);
	// read start side
	if (!f.ReadString(str, StrLen))
		return 0;
	left_start_ = (atoi(str) == 0);
	// read tech parameters
	if (!f.ReadString(str, StrLen))
		return 0;
	int count;
	if (sscanf_s(str, _T("%d"), &count) != 1)
		return 0;
	thread_.clear();
	int k = 0;
	for (; k < count && f.ReadString(str, StrLen); ++k)
	{
		thread_.push_back(atoi(str) != 0);
	}
	if (k != count)
		return 0;
	// Read to text
	CString text;
	while (f.ReadString(str, StrLen))
	{
		text += CString(str) + _T("\n");
	}
	// Read geom
	std::list<NCadrGeom> ResList;
	int res = int(ReadFromStrStCRec(ResList, 0, text));
	///Detect direction of contur (cwarc or ccwarc)
	double SumConer = 0;
	NCadrGeom* pPrevGeom = &ResList.back();
	for (auto it = ResList.begin(); it != ResList.end(); it++)
	{
		BPoint P0(pPrevGeom->GetB());
		BPoint P1(pPrevGeom->GetE());
		BPoint P2(it->GetE());
		BPoint V0 = P1 - P0;
		BPoint V1 = P2 - P1;
		double d0 = sqrt(V0.D2());
		double d1 = sqrt(V1.D2());
		if (d0 == 0 || d1 == 0)
		{
			return 0;
		}
		double tmp1 = V0.GetX() * V1.GetY() - V0.GetY() * V1.GetX();
		double tmp = (V0 * V1) / (d0 * d1);
		if (tmp > 1.)
			tmp = 1.;
		tmp = acos(tmp);
		if (tmp1 < 0.)
			tmp *= -1.;
		SumConer += (tmp);
		pPrevGeom = &(*it);
	}

	orig_.clear();
	orig_.ind_.clear();
	int l = 0;
	for each (auto el in ResList)
	{
		orig_.push_back(el);
		orig_.ind_.push_back(RindMulti(l));
		++l;
	}
	if (SumConer < 0.)
	{
		// Invert contour
		orig_.reverse();
	}
	cur_ = orig_;
	return res;
}

int BTurnRec::WriteOutput()
{
	TiXmlDocument* xml = new TiXmlDocument();
	TiXmlDeclaration* decl = new TiXmlDeclaration("1.0", "", "");
	xml->LinkEndChild(decl);
	TiXmlElement* e_result = new TiXmlElement(_T("recognition_result"));
	for (int i = 0; i < 8; ++i)
	{
		auto id = open_parts_[i].WriteKTE(e_result, 0, params_);
	}
	xml->LinkEndChild(e_result);
	bool res = xml->SaveFile(output_file_);
	delete xml;
	return res;
}

int BTurnRec::DivideQuad()
{
	for (int i = 0; i < cur_.size(); ++i)
	{
		NCadrGeom* buf_geom = nullptr;
		int parts_num = cur_[i].DivideQuad(buf_geom);
		if (parts_num > 1)
		{
			cur_[i] = NCadrGeom(buf_geom[0]);
			auto buf_ind = cur_.ind_[i];
			cur_.ind_[i].push_back(0);
			for (int k = 1; k < parts_num; ++k)
			{
				++i;
				cur_.insert(cur_.begin() + i, NCadrGeom(buf_geom[k]));
				cur_.ind_.insert(cur_.ind_.begin() + i, buf_ind);
				cur_.ind_[i].push_back(k);
			}
			delete[] buf_geom;
		}
	}
	return 0;
}

int BTurnRec::MakeResult()
{
	// Контур ориентирован прчс
	// A.	Разбить дуги на квадранты, сохраняя номера исходных элементов -> cur_
	DivideQuad();
	// B.Найти Хmin, Xmax, Zmin, Zmax
	FindMinMax();
	// C.	Найти номер левой нижней точки. (самая нижняя из самых левых)
	int start_ind = FindLeftBottomInd();
	if (start_ind < 0)
		return 0;
	// E.Перегруппировать контур(левая нижняя – начало)
	if (cur_.NewOrigin(start_ind) == 0)
		return 0;
	// Найти номера 8-и характерных точек
	int nodes[9];
	if (Find8Nodes(nodes) == 0)
		return 0;
	// G.Разрезать контур на 8 частей по характерным точкам и установить ориентацию
	if (CutCont8(nodes) == 0)
		return 0;
	const double max_plunge_angle = config_.GetDouble(_T("config@MaxPlungeAngle"), 30.);
	for (int part_ind = 0; part_ind < 8; ++part_ind)
	{
		if (cont_parts_[part_ind].IsEmpty())
			continue;
		// H.1.A.Установить в правильное положение(слева - направо.Сверху - вниз)
		open_parts_[part_ind] = cont_parts_[part_ind];
		BMatrPair norm_matr = CalcNormMatr(part_ind);
		open_parts_[part_ind].Transform(norm_matr.Or());
		cont_parts_[part_ind].Transform(norm_matr.Or());
		// B.Построить открытый(полуоткрытый)
		open_parts_[part_ind].CreateSemiOpen(cont_parts_[part_ind]);
		// C.Построить все закрытые.
		open_parts_[part_ind].CreateClosed(cont_parts_[part_ind], thread_, max_plunge_angle);
		// E.Вернуть в исходное положение.
		open_parts_[part_ind].Transform(norm_matr.Inv());
		cont_parts_[part_ind].Transform(norm_matr.Inv());
	}
	return 1;
}

int BTurnRec::Find8Nodes(int nodes[9]) const
{
	for (int i = 0; i < 9; ++i)
		nodes[i] = -1;// empty point
	nodes[0] = 0;
	if (fabs(cur_.at(0).GetB().GetY() - params_.y_min_) < MIND)
	{
		nodes[1] = 0;
		nodes[2] = 0;
	}
	for (int i = 1; i < cur_.size(); ++i)
	{
		if (fabs(cur_.at(i).GetB().GetY() - params_.y_min_) < MIND)
		{
			if (nodes[1] == -1)
				nodes[1] = i;
			nodes[2] = i;
		}
		if (fabs(cur_.at(i).GetB().GetY() - params_.y_max_) < MIND)
		{
			if (nodes[5] == -1)
				nodes[5] = i;
			nodes[6] = i;
		}
		if (fabs(cur_.at(i).GetB().GetX() - params_.x_min_) < MIND)
		{
			if (nodes[7] == -1)
				nodes[7] = i;
		}
		if (fabs(cur_.at(i).GetB().GetX() - params_.x_max_) < MIND)
		{
			if (nodes[3] == -1)
				nodes[3] = i;
			nodes[4] = i;
		}
	}
	return 1;
}

int BTurnRec::CutCont8(int nodes[9])
{
	// cut parts
	for (int i = 0; i < 9; ++i)
		if(nodes[i] == -1)
			nodes[i] = int(cur_.size());
	for (int i = 0; i < 8; ++i)
		cont_parts_[i].CopyFrom(cur_, nodes[i], nodes[i + 1]);
	// Orient zones
	cont_parts_[2].RContour::reverse();
	cont_parts_[3].RContour::reverse();
	cont_parts_[6].RContour::reverse();
	int rev_ind = left_start_ ? 5 : 1;
	cont_parts_[rev_ind].RContour::reverse();
	// init zones
	cont_parts_[0].SetAttrs(RZone::RZType::SEMIOPENED, RZone::RZSide::LEFT, RZone::RZPos::BOTTOM);
	cont_parts_[1].SetAttrs(RZone::RZType::OPENED, left_start_ ? RZone::RZSide::LEFT : RZone::RZSide::RIGHT, RZone::RZPos::BOTTOM);
	cont_parts_[2].SetAttrs(RZone::RZType::SEMIOPENED, RZone::RZSide::RIGHT, RZone::RZPos::BOTTOM);
	cont_parts_[3].SetAttrs(RZone::RZType::OPENED, RZone::RZSide::RIGHT, RZone::RZPos::END);
	cont_parts_[4].SetAttrs(RZone::RZType::SEMIOPENED, RZone::RZSide::RIGHT, RZone::RZPos::TOP);
	cont_parts_[5].SetAttrs(RZone::RZType::OPENED, left_start_ ? RZone::RZSide::LEFT : RZone::RZSide::RIGHT, RZone::RZPos::TOP);
	cont_parts_[6].SetAttrs(RZone::RZType::SEMIOPENED, RZone::RZSide::LEFT, RZone::RZPos::TOP);
	cont_parts_[7].SetAttrs(RZone::RZType::OPENED, RZone::RZSide::LEFT, RZone::RZPos::END);
	for (int i = 0; i < 8; ++i)
		cont_parts_[i].InitIndV();

	return 1;
}

void BTurnRec::FindMinMax()
{
	params_.x_min_ = 1.e12;
	params_.x_max_ = -1.e12;
	params_.y_min_ = 1.e12;
	params_.y_max_ = -1.e12;
	for each (auto & el in cur_)
	{
		double x, y, z, h;
		el.GetB().Get(x, y, z, h);
		params_.x_min_ = fmin(params_.x_min_, x);
		params_.x_max_ = fmax(params_.x_max_, x);
		params_.y_min_ = fmin(params_.y_min_, y);
		params_.y_max_ = fmax(params_.y_max_, y);
	}
}

int BTurnRec::FindLeftBottomInd() const
{
	// index of bottom point from all left points
	double yminxmin = 1.e12;
	int start_ind = -1;
	for (int i = 0; i < cur_.size(); ++i)
	{
		auto& el = cur_[i];
		double x, y, z, h;
		el.GetB().Get(x, y, z, h);
		if (fabs(params_.x_min_ - x) < MIND)
		{
			if (y < yminxmin)
			{
				start_ind = i;
				yminxmin = y;
			}
		}
	}
	return start_ind;
}

BMatr BTurnRec::CalcNormMatr(int ind) const
{
	BMatr ret;
	
	switch (ind)
	{
	case 0: // left bottom
		ret.SetE();
		break;
	case 1: // middle bottom
		if (left_start_)
			ret.SetE();
		else
			ret.RotY(0., 0., 0., 180.);
		break;
	case 2: // right bottom
		ret.RotY(0., 0., 0., 180.);
		break;
	case 3: // right end
		ret = BMatr().RotZ(0., 0., 0., 90.) * BMatr().RotX(0., 0., 0., 180.);
		break;
	case 4: // right top
		ret = BMatr().RotY(0., 0., 0., 180.) * BMatr().RotX(0., 0., 0., 180.);
		break;
	case 5: // middle top
		if (left_start_)
			ret.RotX(0., 0., 0., 180.);
		else
			ret = BMatr().RotY(0., 0., 0., 180.) * BMatr().RotX(0., 0., 0., 180.);
		break;
	case 6: // left top
		ret.RotX(0., 0., 0., 180.);
		break;
	case 7: // left end
		ret.RotZ(0., 0., 0., 90.);
		break;
	}
	return ret;
}

size_t BTurnRec::ReadFromStrStCRec(std::list<NCadrGeom>& ResList, size_t Size, CString& Text)
{
	int Pos = Text.Find('G', 1);
	CString str = Text.Left(Pos);
	Text.Delete(0, str.GetLength());
	if (Text.IsEmpty())
	{
//		ErrorCode = IDS_STOCK_WRONG_CONTOUR;//INSERT ID
		return 0;
	}
	Pos = Text.Find('G', 1);
	CString str1 = Pos > 0 ? Text.Left(Pos) : Text;
	Text.Delete(0, str1.GetLength());

	while (true)
	{
		int g;
		double xb, yb, i, j, xe, ye;
		int tn = sscanf_s(str, "G%dX%lfZ%lfI%lfK%lf", &g, &yb, &xb, &j, &i);
		int tn1 = sscanf_s(str1, "G%dX%lfZ%lfI%lfK%lf", &g, &ye, &xe, &j, &i);
		switch (g)
		{
		case 0:
			if (tn < 3 || tn1 < 3)
			{
//				ErrorCode = IDS_STOCK_WRONG_CONTOUR;//INSERT ID
				return 0;
			}
			break;
		case 1:
			if (tn < 3 || tn1 < 3)
			{
//				ErrorCode = IDS_STOCK_WRONG_CONTOUR;//INSERT ID
				return 0;
			}
			ResList.push_back(NCadrGeom());
			ResList.back().Set(line, xb, yb, 0., xe, ye, 0.);
			break;
		case 2:
			if (tn < 3 || tn1 < 5)
			{
//				ErrorCode = IDS_STOCK_WRONG_CONTOUR;//INSERT ID
				return 0;
			}
			ResList.push_back(NCadrGeom());
			ResList.back().Set(cwarc, xb, yb, 0., xe, ye, 0, i, j, 0, XY);
			break;
		case 3:
			if (tn < 3 || tn1 < 5)
			{
//				ErrorCode = IDS_STOCK_WRONG_CONTOUR;//INSERT ID
				return 0;
			}
			ResList.push_back(NCadrGeom());
			ResList.back().Set(ccwarc, xb, yb, 0., xe, ye, 0, i, j, 0, XY);
			break;
		default:
		{
//			ErrorCode = IDS_STOCK_WRONG_CONTOUR;//INSERT ID
			return 0;
		}
		}
		if (Text.IsEmpty())
			break;
		str = str1;
		Pos = Text.Find('G', 1);
		str1 = Pos > 0 ? Text.Left(Pos) : Text;
		Text.Delete(0, str1.GetLength());
	}
	return ResList.size();
}


