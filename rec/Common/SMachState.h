#pragma once

#include "MTCoordinate.h"

class AFX_EXT_CLASS SMachState
{
public:
	SMachState(const SMachState &In);
	SMachState(class SCoordsDef *pDef);
	~SMachState(void);
	const SMachState & operator = (const SMachState &In);
	double GetCoord(int i) const { return Coords[i]; };
	void SetCoord(int i, double Val);
	double GetCoord(const CString &Name) const;
	void SetCoord(const CString &Name, double Val);
	const CString &GetAName(int i) const;
	bool IsVector(void) const;
	bool IsZero(void) const;
	bool GetCooArray(CooArray &Array) const;
	SMachState operator + (const SMachState &P) const;
	SMachState operator - (const SMachState &P) const;
	SMachState operator * (double a) const;
	friend SMachState operator * (const double a, const SMachState &P);
	int GetSize(void) const;
	void ClearValues(void);
	int GetInd(const CString &Name) const;
	void ReplaceCoord(const SMachState &In);
	const CString MakeCadr(void);
protected:
	double *Coords;
	class SCoordsDef *pCoordsDef;
};
