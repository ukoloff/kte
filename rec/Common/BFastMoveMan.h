#pragma once
#include "stdafx.h"
#include "NCadrGeom.h"

class AFX_EXT_CLASS BFastMoveMan
{
public:
	BFastMoveMan();
	~BFastMoveMan();
	static bool PartInterp();
	static void Fill(const CString &Val);
	static int StepsNum;
	static bool CoordFlags[2][3][3];// UP-DOWN; step num; coord num
	static void MakeCadrs(NCadrGeom &Geom, NCadrGeom &AddGeom);
};
