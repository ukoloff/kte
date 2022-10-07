#pragma once
#include "stdafx.h"
#include "string.h"
#include "NCMB_API.h"
#include "tinyxml.h"

class NCMB_API NTiParams 
	
{
public:
	virtual double GetDouble(const char * Key, double Default) = 0;
	virtual const char * GetString(const char * Key, const char * Default) = 0;
	virtual bool GetBool(const char * Key, bool Default) = 0;
	virtual bool LoadFile(const char *Name) = 0;
	virtual void Clear() = 0;
};


class NTiParamsInt :
	public NTiParams, TiXmlDocument
{
public:
	NTiParamsInt(void);
	virtual ~NTiParamsInt(void) override;
	void Clear() { delete this; }
	double GetDouble( const char * Key, double Default) override;
	const char * GetString( const char * Key, const char * Default) override;
	bool GetBool( const char * Key, bool Default) override;
	bool LoadFile(const char *Name) override;
protected:
	TiXmlElement * GetElement(const char * Key, size_t Length);
};

extern "C" NCMB_API NTiParams* __stdcall GenNTiParams();