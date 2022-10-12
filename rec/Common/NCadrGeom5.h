#pragma once
#include "bcadrgeom.h"
#include "stdafx.h"
#include "BPoint.h"
#include "NLine.h"

class AFX_EXT_CLASS NCadrGeom5 : public BCadrGeom
{
public:
	NCadrGeom5();
	~NCadrGeom5();
	void Draw(void);
	BPoint *P;
};
