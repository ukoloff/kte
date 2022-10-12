// NFont.cpp: implementation of the NFont class.
//
//////////////////////////////////////////////////////////////////////

#include "stdafx.h"
#include "NFont.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[]=__FILE__;
#define new DEBUG_NEW
#endif

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

NFont::NFont()
{

}

NFont::~NFont()
{

}

bool NFont::Read(const CString &str)
{
	// str = "[size] [name]"
	int Size;
	CString Buf;
	sscanf(str, _T("%s"), Buf.GetBuffer(2));
	Buf.ReleaseBuffer();
	if(sscanf(LPCTSTR(Buf), _T("%d"), &Size) != 1)
		return false;
	FontSize = Size;
	FontName = str.Right(str.GetLength() - Buf.GetLength() - 1);
	return true;
}

CString NFont::Write()
{
	CString str;
	str.Format(_T("%d %s"), FontSize, FontName);
	return str;
}

void NFont::Set(const CString &Name, int Size)
{
	FontName = Name;
	FontSize = Size;
}

NFont & NFont::operator =(NFont &F)
{
	FontName = F.FontName;
	FontSize = F.FontSize;
	return *this;
}
