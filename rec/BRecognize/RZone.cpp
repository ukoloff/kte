#include "pch.h"
#include "..\NCMb\ConstDef.h"
#include "TinyXML.h"
#include "RZone.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#define new DEBUG_NEW
#endif

RZone::RZone()
{
	type_ = RZType::UNDEF;
    sub_type_ = RZSubType::UNDEF;
    side_ = RZSide::UNDEF;
    pos_ = RZPos::UNDEF;
}

RZone::~RZone()
{
}

void RZone::SetAttrs(RZType type, RZSide side, RZPos pos) noexcept
{
    SetType(type);
    SetSide(side);
    SetPos(pos);
}

void RZone::InitIndV()
{
    ind_v_.resize(size());
    for (int i = 0; i < size(); ++i)
        ind_v_[i] = RindMulti(i);
}

bool RZone::IsEmpty() const
{
    if (size() == 0)
        return true;
    if (type_ == RZType::OPENED && pos_ == RZPos::BOTTOM)
        if (fabs(at(0).GetB().GetY()) < MIND)
            return true;
    return false;
}

void RZone::CreateSemiOpen(RZone& base_cont)
{
    if (size() == 1)
        return;
    // G.1.B Построить открытый (полуоткрытый) контур
    Make1Pass(base_cont, false);
    FlipXY();
    reverse();
    Make1Pass(base_cont, true);
    FlipXY();
    reverse();
}

void RZone::Make1Pass(RZone& base_cont, bool backward)
{
    //
    for (int i = 0; i < size(); ++i)
    {
        NCadrGeom& geom = at(i);
        if ((geom.GetE() - geom.GetB()) * BPoint(0., 1., 0., 0.) > MIND) // strictly up
        {
            bool found = false;
            int first2del = -1;
            int last2del = -1;
            // find next point with the same Y
            for (int k = i + 1; k < size(); ++k)
            {
                NCadrGeom& next_geom = at(k);
                if (fabs((next_geom.GetB() - geom.GetB()) * BPoint(0., 1., 0., 0.)) < MIND) // start point found
                {
                    found = true;
                    first2del = i + 1; // i-th element is to be replacing by new one and should not be deleted
                    last2del = k; // first kept element index
                    geom.Set(line, geom.GetB(), next_geom.GetB()); // new element
                    ind_[i] = RindMulti(-1); // has not analog in the original
                    if (backward)
                    {
                        ind_v_[i] = ind_v_[k - 1];
                    }
                    break;
                }
                if ((next_geom.GetE() - geom.GetB()) * BPoint(0., 1., 0., 0.) < -MIND) // end point is beneath original point 
                {
                    found = true;
                    first2del = i + 1; // i-th element is to be replacing by new one and should not be deleted
                    last2del = k; // first kept element index
                    BPoint int_point = next_geom.RayCast(geom.GetB(), BPoint(1., 0., 0., 0.), MIND);
                    if (int_point.IsPoint())
                    {
                        next_geom.SetB(int_point); // divide by point found (keep second part)
                        geom.Set(line, geom.GetB(), int_point); // new element
                        ind_[i] = RindMulti(-1); // has not analog in the original
                        if (backward)
                        {
                            if (ind_[k][0] == -1) // extra line
                                ind_v_[i][0] = -1;
                            else
                            {
                                ind_v_[i] = ind_v_[k];
                                ind_v_[i].push_back(1);
                                // divide geom in the base_cont
                                int_point.FlipXY();
                                base_cont.DivideGeomMultiInd(ind_v_[k], int_point);
                                ind_v_[k].push_back(0); // second part of the geom (must be after DivideGeom)
                            }
                        }
                        else
                        {
                            // divide geom in the base_cont
                            base_cont.DivideGeomMultiInd(ind_v_[k], int_point);
                            ind_v_[k].push_back(1); // second part of the geom (must be after DivideGeom)
                       }
                    }
                    else // internal error
                    {
                    }
                    break;
                }
            }
            if (!found)
            {// check last point
                if (fabs((back().GetE() - geom.GetB()) * BPoint(0., 1., 0., 0.)) < MIND) // end point found
                {
                    // this may occur with last element of the opened zone only
                    found = true;
                    first2del = i + 1; // i-th element is to be replacing by new one and should not be deleted
                    last2del = static_cast<int>(size()); // first kept element index
                    geom.Set(line, geom.GetB(), back().GetE()); // new element
                    ind_[i] = RindMulti(-1); // has not analog in the original
                    if (backward)
                    {
                        ind_v_[i] = ind_v_[size() - 1];
                    }
                }

            }
            if (found)
            {
                erase(begin() + first2del, begin() + last2del);
                ind_.erase(ind_.begin() + first2del, ind_.begin() + last2del);
                ind_v_.erase(ind_v_.begin() + first2del, ind_v_.begin() + last2del);
            }
            else // internal error
            {
            }
        }
    }
}

void RZone::FlipXY()
{
    for (int i = 0; i < size(); ++i)
        at(i).FlipXY();
}

auto RZone::GetItByMultiInd(const RindMulti& ind) const
{
    for (auto i = ind[0]; i < size(); ++i)
    {
        if (ind_v_[i] == ind)
            return begin() + i;
    }
    return end();
}

bool RZone::DivideGeom(const std::vector<NCadrGeom>::const_iterator& base_cont_it, const BPoint& int_point)
{
   if (base_cont_it == end())
    {// internal error
        return false;
    }
    const auto loc_ind = base_cont_it - begin();
    NCadrGeom first_part = *base_cont_it;
    first_part.SetE(int_point);
    at(loc_ind).SetB(int_point);
    insert(base_cont_it, *base_cont_it);
    // base_cont_it is not valid now
    at(loc_ind) = first_part;
    ind_.insert(ind_.begin() + loc_ind, ind_.at(loc_ind));
    ind_v_.insert(ind_v_.begin() + loc_ind, ind_v_.at(loc_ind));
    ind_v_.at(loc_ind).push_back(0);
    ind_v_.at(loc_ind + 1).push_back(1);
    return true;
}

bool RZone::DivideGeomMultiInd(const RindMulti& multi_ind, const BPoint& int_point)
{
    auto base_cont_it = GetItByMultiInd(multi_ind);
    return DivideGeom(base_cont_it, int_point);
}

bool RZone::DivideGeomInd(int ind, const BPoint& int_point)
{
    return DivideGeom(begin() + ind, int_point);
}

void RZone::reverse() noexcept
{
    RContour::reverse();
    for (int i = 0; i < size() / 2; ++i)
    {
        auto j = size() - i - 1;
        auto bufi = ind_v_.at(i);
        ind_v_.at(i) = ind_v_.at(j);
        ind_v_.at(j) = bufi;
    }
}

void RZone::DefineSubtype(double max_plunge_angle)
{
    if (GetSubType() != RZSubType::UNDEF) // subtype is defined already
        return;
    if (IsNotchX())
    {
        auto sub = (GetPos() == RZPos::END) ? RZSubType::NOTCH_Z : RZSubType::NOTCH_X;
        SetSubType(sub);
        return;
    }
    if (IsNotchZ())
    {
        SetSubType(RZSubType::NOTCH_Z);
        return;
    }
    if (IsSubtypeST1(max_plunge_angle))
    {
        SetSubType(RZSubType::ST1);
        return;
    }
    if (IsSubtypeST2())
    {
        SetSubType(RZSubType::ST2);
        return;
    }
}

void RZone::ProcClosed(double max_plunge_angle)
{
    DefineSubtype(max_plunge_angle);
    if (IsSubTypeTerminal())
        return; // processing is over

    // While the last pass brings new results
    for (bool need_cont = true; need_cont;)
    {
        need_cont = false;
        // Find notch part of this contour
        for (int i = 0; i < size(); ++i)
        {
            int end_ind = HaveNotchX(i);// try to find notch_x starting from i
            if (end_ind == -1)
                continue;
            if (end_ind == size() && i == 0)
                break;

            // The notch found
            int start_ind = i;

            // make it ends to have same Y
            AlignNotchEnds(start_ind, end_ind);

            // Make new RZone
            children_.emplace_back();
            RZone& new_zone = children_.back();
            new_zone.InitClosed(*this);
            new_zone.CopyFrom(*this, start_ind, end_ind);
            new_zone.ind_v_.assign(ind_v_.begin() + start_ind, ind_v_.begin() + end_ind);
            new_zone.DefineSubtype(max_plunge_angle);

            // Remove notch from contour (keep one element for the extra element)
            erase(begin() + start_ind + 1, begin() + end_ind);
            ind_.erase(ind_.begin() + start_ind + 1, ind_.begin() + end_ind);
            ind_v_.erase(ind_v_.begin() + start_ind + 1, ind_v_.begin() + end_ind);

           // Find children for the new zone
            for(int l = 0; l < new_zone.size(); ++l)
            {
                if (new_zone.ind_[l][0] == -1)
                {
                    // move correspondent zone from children_ to new_zone.children_
                    new_zone.children_.push_back(children_[new_zone.ind_v_[l][0]]);
                    new_zone.ind_v_[l][0] = static_cast<int>(new_zone.children_.size()) - 1; // store new index
                    children_[new_zone.ind_v_[l][0]].clear(); // don't erase to keep indexes
                }
            }

            //Make extra element
            at(start_ind).SetE(new_zone.back().GetE());
            ind_[start_ind].resize(1);
            ind_[start_ind][0] = -1;
            ind_v_[start_ind].resize(1);
            ind_v_[start_ind][0] = int(children_.size()) - 1; // index of the correspondent new zone

            // start search again
            need_cont = true;
            break;
        }
    }
    // remove empty children
    for (int k = int(children_.size()) - 1; k >= 0; --k)
    {
        if (children_[k].empty())
            children_.erase(children_.begin() + k);
    }
    //
    sub_type_ = RZSubType::UNDEF; // to ensure DefineSubtype works properly
    DefineSubtype(max_plunge_angle);
}

bool RZone::IsSubtypeST1(double max_angle) const
{
    for each (auto geom in *this)
    {
        BPoint vect = geom.GetE() - geom.GetB();
        if (vect.GetX() < 0.)
            return false;
        if (vect.GetY() < 0.)
            continue;
        BPoint start_dir = geom.GetStartDir();
        if (start_dir.Angle0_180(BPoint(1., 0., 0., 0.)) > max_angle + MINAD)
            return false;
        BPoint end_dir = geom.GetEndDir();
        if (end_dir.Angle0_180(BPoint(1., 0., 0., 0.)) > max_angle + MINAD)
            return false;
    }
    return true;
}

bool RZone::IsSubtypeST2() const
{
    for each (auto geom in *this)
    {
        BPoint vect = geom.GetE() - geom.GetB();
        if (vect.GetX() < -DMIN)
            return false;
    }
    return true;
}

bool RZone::IsNotchX() const
{
    // Verical part up
    auto cur1 = begin();
    for (; cur1 != end(); ++cur1)
    {
        BPoint v = cur1->GetE() - cur1->GetB();
        if (v.GetY() < -MIND || fabs(v.GetX()) > MIND)
            break;
    }
    if (cur1 == begin())
        return false;
    // Horizontal part
    auto cur2 = cur1;
    for (; cur2 != end(); ++cur2)
    {
        BPoint v = cur2->GetE() - cur2->GetB();
        if (fabs(v.GetY()) > MIND)
            break;
    }
    if (cur2 == cur1)
        return false;
    // Verical part down
    auto cur3 = cur2;
    for (; cur3 != end(); ++cur3)
    {
        BPoint v = cur3->GetE() - cur3->GetB();
        if (v.GetY() > MIND || fabs(v.GetX()) > MIND)
            break;
    }
    if (cur3 == cur2)
        return false;
    if (cur3 != end())
        return false;
    return true;
}

int RZone::HaveNotchX(int start_ind) const
{
    // try to find notch_x starting from start_ind
    // return -1 if no notch found or index of the first element after the notch or size() otherwize
    
    // Verical part up
    auto cur1 = begin() + start_ind;
    auto start = cur1;
    for (; cur1 != end(); ++cur1)
    {
        BPoint v = cur1->GetE() - cur1->GetB();
        if (v.GetY() < -MIND || fabs(v.GetX()) > MIND)
            break;
    }
    if (cur1 == start)
        return -1;
    // Horizontal part
    auto cur2 = cur1;
    for (; cur2 != end(); ++cur2)
    {
        BPoint v = cur2->GetE() - cur2->GetB();
        if (fabs(v.GetY()) > MIND)
            break;
    }
    if (cur2 == cur1)
        return -1;
    // Verical part down
    auto cur3 = cur2;
    for (; cur3 != end(); ++cur3)
    {
        BPoint v = cur3->GetE() - cur3->GetB();
        if (v.GetY() > MIND || fabs(v.GetX()) > MIND)
            break;
    }
    if (cur3 == cur2)
        return -1;
    return static_cast<int>(cur3 - begin());
}

bool RZone::IsNotchZ() const
{
    // Horizontal part
    auto cur1 = begin();
    bool left_first = false;
    for (; cur1 != end(); ++cur1)
    {
        BPoint v = cur1->GetE() - cur1->GetB();
        if (fabs(v.GetY()) > MIND)
            break;
        left_first = v.GetX() < 0.;
    }
    if (cur1 == begin())
        return false;
    // Verical part
    auto cur2 = cur1;
    for (; cur2 != end(); ++cur2)
    {
        BPoint v = cur2->GetE() - cur2->GetB();
        if (fabs(v.GetX()) > MIND)
            break;
    }
    if (cur2 == cur1)
        return false;
    // Horizontal part
    auto cur3 = cur2;
    for (; cur3 != end(); ++cur3)
    {
        BPoint v = cur3->GetE() - cur3->GetB();
        if (fabs(v.GetY()) > MIND)
            break;
        if (left_first == v.GetX() < 0.)
            break; // the same side with first line
    }
    if (cur3 == cur2)
        return false;
    if (cur3 != end())
        return false;
    return true;
}

void RZone::InitClosed(const RZone& parent)
{
    side_ = parent.side_;
    pos_ = parent.pos_;
    type_ = RZType::CLOSED;
}

void RZone::Transform(const BMatr& matr)
{
    for (auto it = children_.begin(); it != children_.end(); ++it)
        it->Transform(matr);
    RContour::Transform(matr);
}

int RZone::WriteKTE(TiXmlElement* e_parent, int parent_id, double stock_diameter) const
{
    auto id = Write1KTE(e_parent, parent_id, stock_diameter);
    // recursion
    for each (const auto& zone in children_)
        zone.WriteKTE(e_parent, id, stock_diameter);
    return id;
}

int RZone::Write1KTE(TiXmlElement* e_parent, int parent_id, double stock_diameter) const
{
    static int loc_id = 0;
    if (e_parent == nullptr)
        return -1;
    if (IsEmpty())
        return -1;

    ++loc_id;

    TiXmlElement* e_kte = new TiXmlElement(_T("kte"));
    e_parent->LinkEndChild(e_kte);
    e_kte->SetAttribute(_T("id"), loc_id);
    e_kte->SetAttribute(_T("parent_id"), parent_id);
    e_kte->SetDoubleAttribute(_T("X"), GetBaseY());
    e_kte->SetDoubleAttribute(_T("Z"), GetBaseX());
    const double max_y = GetMaxY();
    const double min_y = GetMinY();
    e_kte->SetDoubleAttribute(_T("A"), 2. * min_y);
    e_kte->SetDoubleAttribute(_T("B"), 2. * max_y);
    e_kte->SetDoubleAttribute(_T("h"), max_y - min_y);
    e_kte->SetDoubleAttribute(_T("Rmin"), GetRintMin());
    e_kte->SetDoubleAttribute(_T("b"), GetWidth());
    e_kte->SetDoubleAttribute(_T("H1"), stock_diameter * 0.5 - max_y);

    CString type_s;
    switch (GetType())
    {
    case RZone::RZType::CLOSED:
        type_s = _T("closed");
        break;
    case RZone::RZType::OPENED:
        type_s = _T("opened");
        break;
    case RZone::RZType::SEMIOPENED:
        type_s = _T("semiopened");
        break;
    default:
        type_s = _T("undef");
        break;
    }
    CString side_s;
    switch (GetSide())
    {
    case RZone::RZSide::LEFT:
        side_s = _T("left");
        break;
    case RZone::RZSide::RIGHT:
        side_s = _T("right");
        break;
    default:
        side_s = _T("undef");
        break;
    }
    CString pos_s;
    switch (GetPos())
    {
    case RZone::RZPos::TOP:
        pos_s = _T("top");
        break;
    case RZone::RZPos::BOTTOM:
        pos_s = _T("bottom");
        break;
    case RZone::RZPos::END:
        pos_s = _T("end");
        break;
    default:
        pos_s = _T("undef");
        break;
    }
    if (GetType() == RZone::RZType::CLOSED)
    {
        CString sub_s;
        switch (GetSubType())
        {
        case RZone::RZSubType::ST1:
            sub_s = _T("st1");
            break;
        case RZone::RZSubType::ST2:
            sub_s = _T("st2");
            break;
        case RZone::RZSubType::THREAD:
            sub_s = _T("thread");
            break;
        case RZone::RZSubType::NOTCH_X:
            sub_s = _T("notch_x");
            break;
        case RZone::RZSubType::NOTCH_Z:
            sub_s = _T("notch_z");
            break;
        default:
            sub_s = _T("undef");
            break;
        }
        e_kte->SetAttribute(_T("subtype"), sub_s);
    }
    e_kte->SetAttribute(_T("type"), type_s);
    e_kte->SetAttribute(_T("side"), side_s);
    e_kte->SetAttribute(_T("pos"), pos_s);
    TiXmlElement* e_cont = new TiXmlElement(_T("contour"));
    CString text;
    WriteToStrStCRec(text);
#ifdef _DEBUG
    CString f_name("C:\\Development\\RectWork\\%d.iso");
    f_name.Format(f_name, loc_id);
    CStdioFile f;
    if (f.Open(f_name, CFile::typeText | CFile::modeWrite | CFile::modeCreate))
    {
        f.WriteString(text);
    }

#endif
    TiXmlText* e_text = new TiXmlText(text);

    e_cont->LinkEndChild(e_text);
    e_kte->LinkEndChild(e_cont);
    return loc_id;
}

void RZone::WriteToStrStCRec(CString& text) const
{
    double xe, ye, ze;
    bool firstCadr = true;
    for (int n = 0; n < size(); ++n)
    {
        const NCadrGeom* pCur = &at(n);

        double xb, yb, zb;
        pCur->GetB(&xb, &yb, &zb);
        pCur->GetE(&xe, &ye, &ze);
        double i, j, k;
        pCur->GetI(&i, &j, &k);
        const int l_val = ind_[n][0] + 1;

        if ((pCur->IsFast()))
        {
            CString str;
            str.Format("G0X%lfZ%lfL%d\n", ye, xe, 0);
            text += str;
            firstCadr = false;
            continue;
        }
        if ((pCur->IsLine()))
        {
            if (firstCadr)
            {
                CString str;
                str.Format("G0X%lfZ%lfL%d\n", yb, xb, 0);
                text += str;
                firstCadr = false;
            }
            CString str;
            str.Format("G1X%lfZ%lfL%d\n", ye, xe, l_val);
            text += str;
            continue;
        }
        if (pCur->IsCWArc())
        {
            if (firstCadr)
            {
                CString str;
                str.Format("G0X%lfZ%lfL%d\n", yb, xb, 0);
                text += str;
                firstCadr = false;
            }
            CString str;
            str.Format("G2X%lfZ%lfL%dI%lfK%lf\n", ye, xe, l_val, j, i);
            text += str;
            continue;
        }
        if (pCur->IsCCWArc())
        {
            if (firstCadr)
            {
                CString str;
                str.Format("G0X%lfZ%lfL%d\n", yb, xb, 0);
                text += str;
                firstCadr = false;
            }
            CString str;
            str.Format("G3X%lfZ%lfL%dI%lfK%lf\n", ye, xe, l_val, j, i);
            text += str;
            continue;
        }
    }
}

double RZone::GetBaseY() const
{
    if (IsEmpty())
        return 0.;
    return at(0).GetB().GetY();
}

double RZone::GetBaseX() const
{
    if (IsEmpty())
        return 0.;
    return at(0).GetB().GetX();
}

double RZone::GetMinY() const
{
    if (IsEmpty())
        return 0.;

    double min_y = at(0).GetB().GetY();
    for each (auto el in *this)
        min_y = fmin(min_y, el.GetE().GetY());

    return min_y;
}

double RZone::GetRintMin() const
{
    if (IsEmpty())
        return DBL_MAX;
    if (GetType() == RZType::OPENED || GetType() == RZType::UNDEF)
        return DBL_MAX;

    const bool right_oriented = (GetSide() == RZSide::LEFT) == (GetPos() == RZPos::TOP);
    const double turn_sign = (right_oriented) ? 1. : -1.;
    const curve arc_dir = (right_oriented) ? ccwarc : cwarc;

    double min_r = DBL_MAX;

    // check arcs
    for each (auto el in *this)
    {
        if (el.GetType().type == arc_dir)
            min_r = fmin(min_r, el.GetR());
    }

    // check corners
    for (int i = 1; i < size(); ++i)
    {
        if (at(i).Angle(at(i - 1)) * turn_sign > MINAD)
            return 0.;
    }
    
    return min_r;
}

double RZone::GetMaxY() const
{
    if (IsEmpty())
        return 0.;

    double max_y = at(0).GetB().GetY();
 
    for each (auto el in *this)
        max_y = fmax(max_y, el.GetE().GetY());

    return max_y;
}

double RZone::GetWidth() const
{
    if (IsEmpty())
        return 0.;

    return fabs(front().GetB().GetX() - back().GetE().GetX());
}

int RZone::CreateClosed(const RZone& base_cont, std::vector<bool> thread, double max_plunge_angle)
{
    children_.clear();
    if (size() < 2)
        return 0;

    for (auto i = 0; i < size(); ++i)
    {
        if (ind_[i][0] != -1)
        {
            if (thread[ind_[i][0]])
            {
                int k = i + 1;
                for (; k < size() && ind_[k][0] != -1; ++k)
                    if (!thread[ind_[k][0]])
                        break;
                children_.emplace_back();
                auto& closed_cont = children_.back();
                closed_cont.InitClosed(*this);
                closed_cont.SetSubType(RZone::RZSubType::THREAD);
                closed_cont.CopyFrom(*this, i, k);
                i = k - 1;
            }
            continue;
        }
        // extra element found
        const auto start = base_cont.GetItByMultiInd(ind_v_[i]);
        if (start == base_cont.end())
            break; // internal error
        auto last = i + 1;
        if (last != size())
        {
            if (ind_v_[last][0] == -1) // maximum 2 consequtive extra elements may exist
                ++last;
        }
        auto end = base_cont.end();
        if (last != size())
            end = base_cont.GetItByMultiInd(ind_v_[last]);
        // start and end of closed contour found
        i = last - 1; // because of ++i cycle title
        children_.emplace_back();
        auto& closed_cont = children_.back();
        closed_cont.InitClosed(*this);
        auto start_ind = start - base_cont.begin();
        auto end_ind = end - base_cont.begin();

        for (auto k = start_ind; k < end_ind; ++k)
        {
            closed_cont.push_back(base_cont[k]);
            closed_cont.ind_.push_back(base_cont.ind_[k]);
        }
        closed_cont.InitIndV();
    }
    // try to find nested closed zones and define subtypes
    for (auto i = 0; i < children_.size(); ++i)
        children_[i].DefineSubtype(max_plunge_angle);
//        children_[i].ProcClosed(max_plunge_angle);
    return int(children_.size());
}

bool RZone::IsSubTypeTerminal() const
{
    switch (sub_type_)
    {
    case RZSubType::NOTCH_X:
    case RZSubType::NOTCH_Z:
    case RZSubType::THREAD:
    case RZSubType::ST1:
        return true;
    case RZSubType::ST2:
    case RZSubType::UNDEF:
    default:
        return false;
    }
}

void RZone::AlignNotchEnds(int& start_ind, int& end_ind)
{
    double gap = at(start_ind).GetB().GetY() - at(end_ind - 1).GetE().GetY();
    if (fabs(gap) >= MIND)
    {
        // Align start and end points
        if (gap > 0.) // need search forward
        {
            const double start_y = at(start_ind).GetB().GetY();
            // find next point with the same Y
            for (int k = start_ind + 1; k < end_ind; ++k)
            {
                NCadrGeom& next_geom = at(k);
                if (fabs(next_geom.GetB().GetY() - start_y) < MIND) // start point found
                {
                    end_ind = k;
                    break;
                }
                if ((next_geom.GetE().GetY() - start_y) < -MIND) // end point is beneath original point 
                {
                    BPoint int_point = next_geom.RayCast(at(start_ind).GetB(), BPoint(1., 0., 0., 0.), MIND);
                    if (int_point.IsPoint())
                    {
                        DivideGeomInd(k, int_point);
                        end_ind = k + 1;
                    }
                    else // internal error
                    {
                    }
                    break;
                }
            }
        }
        else // need search backward
        {
            const double start_y = at(end_ind - 1).GetE().GetY();
            // find next point with the same Y
            for (int k = end_ind - 2; k >= start_ind; --k)
            {
                NCadrGeom& next_geom = at(k);
                if (fabs(next_geom.GetE().GetY() - start_y) < MIND) // end point found
                {
                    start_ind = k + 1;
                    break;
                }
                if ((next_geom.GetB().GetY() - start_y) < -MIND) // start point is beneath original point 
                {
                    BPoint int_point = next_geom.RayCast(at(end_ind - 1).GetE(), BPoint(-1., 0., 0., 0.), MIND);
                    if (int_point.IsPoint())
                    {
                        DivideGeomInd(k, int_point);
                        start_ind = k + 1;
                        ++end_ind;// DivideGeom contains insertion
                    }
                    else // internal error
                    {
                    }
                    break;
                }
            }

        }
    }

}
