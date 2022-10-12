// BGeomArray.h: interface for the BGeomArray class.
//
//////////////////////////////////////////////////////////////////////

#pragma once
#include "BPoint.h"
#include "NCadrGeomArray.h"


class AFX_EXT_CLASS BGeomArray : public NCadrGeomArray  
{
public:
	BGeomArray();
	virtual ~BGeomArray();
	void Open();
	void Close(bool BiArc);
	int AddElement(const NCadrGeom &el );
	void RemoveAll();
	void Draw(int FirstHCadr,int LastHCadr, int BoldCadr = -1);
	int Sort(double Tol);
	void Swap(int i, int j);

protected:
	BOOL Closed; // Added to prevent extra cycle elements in the end of the array
	BPoint GetPointByStorNum(int Num) const;
	void QuickSortRecursive(int *pArr, INT_PTR d, INT_PTR h);
	BOOL QuickSort(int *pArr, INT_PTR iSize);
	int Compare(int a, int b);
public:
	void MakeContinuous(void);
	void Reverse(void);
	double GetVolumeRot(void) const;
	NCadrGeom *GetLast(void) {return GetAt(GetSize() - 1);}

};
