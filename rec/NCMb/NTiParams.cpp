#include "stdafx.h"
#include "ntiparams.h"
#include <string>

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#define new DEBUG_NEW
#endif

using namespace std;

extern "C" NCMB_API NTiParams* __stdcall GenNTiParams()
{
	return new NTiParamsInt;
}

NTiParamsInt::NTiParamsInt(void)
{
}

NTiParamsInt::~NTiParamsInt(void)
{
}
double NTiParamsInt::GetDouble( const char * Key, double Default) const
{
	string SKey(Key);
	size_t LastPos = SKey.rfind('@');
	if(LastPos == string::npos)
		return Default;
	TiXmlElement * pElement = GetElement(Key, LastPos);
	if(pElement == NULL)
		return Default;
	string SubKey = SKey.substr(LastPos + 1);
	double Res;
	if(pElement->QueryDoubleAttribute(SubKey.data(), &Res) == TIXML_SUCCESS)
		return Res;
	return Default;
}
const char * NTiParamsInt::GetString( const char * Key, const char * Default)
{
	string SKey(Key);
	size_t LastPos = SKey.rfind('@');
	if(LastPos == string::npos)
		return Default;
	TiXmlElement * pElement = GetElement(Key, LastPos);
	if(pElement == NULL)
		return Default;
	string SubKey = SKey.substr(LastPos + 1);
	const char * Res = pElement->Attribute(SubKey.data());
	if(Res)
		return Res;
	return Default;
}

bool NTiParamsInt::GetBool( const char * Key, bool Default)
{
	const char *str = GetString(Key, Default ? "Yes" : "No");
	return (strncmp(str, "Yes", 3) == 0);
}


TiXmlElement * NTiParamsInt::GetElement(const char * Key, size_t Length) const
{
	string SKey(Key);

	const TiXmlNode * pElem = this;
	for(size_t CurPos = 0; CurPos < Length; )
	{
		size_t CurEnd = SKey.find('/', CurPos);
		if(CurEnd == string::npos)
			CurEnd = Length;
		string SubKey = SKey.substr(CurPos, CurEnd - CurPos);
		CurPos = CurEnd + 1;

		pElem = pElem->FirstChildElement(SubKey.data());
		
		if(!pElem)
			return NULL;
	}
	return (TiXmlElement *)pElem;
}

bool NTiParamsInt::LoadFile(const char *Name)
{
	return TiXmlDocument::LoadFile(Name);
}
