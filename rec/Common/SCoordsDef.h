#pragma once

#include "MTCoordinate.h"

class AFX_EXT_CLASS SCoordsDef
{
	friend class SMachState;
public:
	SCoordsDef(int iSize);
	SCoordsDef(const CString & InitStr);
	~SCoordsDef(void);
//	bool SetName(int Ind, const CString &Name);
	const CString & GetName(int Ind) const { return Names.GetAt(Ind);}
	SMachState *GenNewState(void);
	int GetSize(void) const { return (int)Names.GetSize();}
	bool Define(const CString & InitStr);
	bool Define(int iSize);
	bool Define(const CooArray &InitCoo);
	int GetInd(const CString & Name) const;

	static CString DummyName;

protected:
	int InstancesCount;
	CStringArray Names;
};
