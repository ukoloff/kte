#pragma once
#include "stdafx.h"
#include "BRecognize_API.h"
#include "NTiParams.h"
#include "RContour.h"
#include "RZone.h"
#include <vector>
#include <list>

class BRecognize_API BTurnRec
{
public:
	BTurnRec(const char* path, const char* in, const char* out);
	int Proc();
	int ReadConfig();
	int ReadInput();
	int WriteOutput();
	int DivideQuad();
	int MakeResult();
	int Find8Nodes(int nodes[9]) const;
	int CutCont8(int nodes[9]);
	void FindMinMax();
	int FindLeftBottomInd() const;
	BMatr CalcNormMatr(int ind) const;

	size_t ReadFromStrStCRec(std::list<NCadrGeom>& res_list, size_t size, CString& text);


protected:
	NTiParams& Config;
	CString exe_file_;
	CString input_file_;
	CString output_file_;
	bool left_start_;
	double stock_diameter_;
	double stock_length_;
	std::vector<bool> thread_;
	RContour orig_;
	RContour cur_;
	double x_min_, x_max_, y_min_, y_max_;
	RZone cont_parts_[8];// left-bottom, bottom, ..., left-top, left-end
	RZone open_parts_[8];// left-bottom, bottom, ..., left-top, left-end
};

