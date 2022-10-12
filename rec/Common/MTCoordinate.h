// MTCoordinate.h: interface for the MTCoordinate class.
//
//////////////////////////////////////////////////////////////////////
#pragma once

class AFX_EXT_CLASS MTCoordinate  
{
public:
	void Serialize(CArchive &ar);
	double Value;
	CString AxisName;
	MTCoordinate();
	MTCoordinate(const CString& AN, double V);
	void Set(const CString& AN, double V);
	~MTCoordinate();

};

typedef CArray<MTCoordinate,const MTCoordinate &> CooArray;

