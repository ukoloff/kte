#include "stdafx.h"
#include "ResInv.h"
#include "MTCoordinate.h"
#include "SCoordsDef.h"
#include "SMachState.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#define new DEBUG_NEW
#endif

SMachState::SMachState(SCoordsDef *pDef)
{
	pCoordsDef = pDef;
	if(pCoordsDef)
		++pCoordsDef->InstancesCount;
	Coords = new double[GetSize()];
	ClearValues();
}
SMachState::SMachState(const SMachState &In)
{
	pCoordsDef = In.pCoordsDef;
	if(pCoordsDef)
		++pCoordsDef->InstancesCount;
	Coords = new double[GetSize()];
	for(int i = 0; i < GetSize(); ++i)
		Coords[i] = In.Coords[i];
}

SMachState::~SMachState(void)
{
	delete [] Coords;
	if(pCoordsDef)
		--pCoordsDef->InstancesCount;
}
const SMachState & SMachState::operator = (const SMachState &In)
{
	if(pCoordsDef != In.pCoordsDef)
	{
		bool SizeChanges = true;
		if(pCoordsDef)
		{
			if(In.pCoordsDef)
				SizeChanges = (pCoordsDef->GetSize() != In.pCoordsDef->GetSize());
			--pCoordsDef->InstancesCount;
		}
		pCoordsDef = In.pCoordsDef;
		if(pCoordsDef)
			++pCoordsDef->InstancesCount;

		if(SizeChanges)
		{
			delete [] Coords;
			Coords = new double[GetSize()];
		}
	}
	for(int i = 0; i < GetSize(); ++i)
		Coords[i] = In.Coords[i];
	return *this;
}
int SMachState::GetSize() const
{
	return pCoordsDef == NULL ? 1 : pCoordsDef->GetSize() + 1;
}
double SMachState::GetCoord(const CString &Name) const
{
	// Returns the value of the coordinate with the given Name
	// Returns 0 if the coordinate with the given Name is not present
	int i;
	if((i = GetInd(Name)) >= 0)
		return Coords[i];
	return 0.;
}

void SMachState::SetCoord(const CString &Name, double Val)
{
	// Does nothing if the coordinate with the given Name is not present
	int i;
	if((i = GetInd(Name)) >= 0)
		Coords[i] = Val;
}
void  SMachState::SetCoord(int i, double Val)
{
	if(i < 0 || i >= GetSize())
		return;
	Coords[i] = Val; 
}
int SMachState::GetInd(const CString &Name) const
{
	if(pCoordsDef)
		return pCoordsDef->GetInd(Name);
	else
		return -1;
}

const CString &SMachState::GetAName(int i) const
{
	if(pCoordsDef)
		return pCoordsDef->GetName(i);
	else
		return SCoordsDef::DummyName;
}
SMachState SMachState::operator + (const SMachState &P) const
{
	SMachState Ret(pCoordsDef);
	for(int i = 0; i < GetSize(); ++i)
		Ret.Coords[i] = Coords[i] + P.Coords[i];
	return Ret;
}
SMachState SMachState::operator - (const SMachState &P) const
{
	SMachState Ret(pCoordsDef);
	for(int i = 0; i < GetSize(); ++i)
		Ret.Coords[i] = Coords[i] - P.Coords[i];
	return Ret;
}
SMachState SMachState::operator * (double a) const
{
	SMachState Ret(pCoordsDef);
	for(int i = 0; i < GetSize(); ++i)
		Ret.Coords[i] = Coords[i] * a;
	return Ret;
}
SMachState operator * (const double a, const SMachState &P)
{
	return P * a;
}

bool SMachState::GetCooArray(CooArray &Array) const
{
	Array.SetSize(GetSize() - 1);
	for(int i = 0; i < GetSize() - 1; ++i)
		Array[i].Set(GetAName(i), GetCoord(i));

	return true;
}
bool SMachState::IsVector() const
{ 
	return Coords[GetSize() - 1] == 0.;
}

bool SMachState::IsZero() const
{ 
	for(int i = 0; i < GetSize(); ++i)
		if(Coords[i] != 0.)
			return false;
	return true;
}

void SMachState::ClearValues()
{
	for(int i = 0; i < GetSize() - 1; ++i)
		Coords[i] = 0.;
	Coords[GetSize() - 1] = 1.;
}

void SMachState::ReplaceCoord(const SMachState &In)
{
	// Replace values of the coordinates from In
	for(int i = 0; i < In.GetSize() - 1; ++i)
		SetCoord(In.GetAName(i), In.GetCoord(i));
}
const CString SMachState::MakeCadr(void)
{
	CString CadrStr;
	for(int i = 0; i < GetSize() - 1; ++i)
	{
		CString Val;
		Val.Format(IDS_TILT_FORMAT, GetCoord(i));
		CadrStr = CadrStr + GetAName(i) + Val;
	}
	return CadrStr;
}
