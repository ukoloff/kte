// MTCoordinate.cpp: implementation of the MTCoordinate class.
//
//////////////////////////////////////////////////////////////////////

#include "stdafx.h"
//#include "MachineTool.h"
#include "MTCoordinate.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[]=__FILE__;
#define new DEBUG_NEW
#endif

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

MTCoordinate::MTCoordinate()
{
	Value=0.;
}
MTCoordinate::MTCoordinate(	const CString& AN, double V)
{
	Set(AN, V);
}

void MTCoordinate::Set(	const CString& AN, double V)
{
	AxisName = AN;
	Value = V;
}

MTCoordinate::~MTCoordinate()
{

}

void MTCoordinate::Serialize(CArchive &ar)
{
	if(ar.IsStoring())
	{
		ar<<Value;
		ar<<AxisName;
	}
	else
	{
		ar>>Value;
		ar>>AxisName;
	}
}

