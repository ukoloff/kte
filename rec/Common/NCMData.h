// NCMData.h: interface for the NCMData class.
//
//////////////////////////////////////////////////////////////////////

#pragma once

#include "InfoStock.h"	// Added by ClassView
class AFX_EXT_CLASS NCMData 
{
	class NPtrArray : public CPtrArray 
	{
	public:
		void CopyAndAdd(const void *p,const int size);
		void Serialize(CArchive &ar);
		NPtrArray();
		virtual ~NPtrArray();

	};

public:
	CString UnitFile;
	CString UnitName;
	CString UnitType;
	CString UnitManufacturer;
	CString UnitOperation;
	CString UnitAxes;
	InfoStock Stock;
	NPtrArray ProgArray;
	NPtrArray ToolArray;
public:
	void Serialize(CArchive& ar);
	NCMData();
	virtual ~NCMData();
	bool LoadNCMFile(const CString& fname);
	bool GetText(int FormatIDAll, CString &TextAll, int FormatIDProgs, CString &TextProgs,int FormatIDTools, CString &TextTools);
	static const CString GetTimeFromDouble(double Val);

protected:
};
