// NMapStringToOb.cpp: implementation of the NMapStringToOb class.
//
//////////////////////////////////////////////////////////////////////

#include "stdafx.h"
#include "NMapStringToOb.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[]=__FILE__;
#define new DEBUG_NEW
#endif

IMPLEMENT_SERIAL(NMapStringToOb, CMapStringToOb, 0)
//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

NMapStringToOb::NMapStringToOb()
{
	pos = -1;
	ClearSelected();
}

NMapStringToOb::~NMapStringToOb()
{

}

void NMapStringToOb::RemoveAll()
{
	Order.RemoveAll();
	CMapStringToOb::RemoveAll();
}

void NMapStringToOb::FullRemoveAll()
{
	for(int i = 0; i < GetSize(); ++i)
	{
		CObject *pObj = NULL;
		CString Key;
		GetAt(i, Key, pObj);
		delete pObj;
	}
	RemoveAll();
}

void NMapStringToOb::SetAt(LPCTSTR key, CObject* newValue)
{
	CObject *pO;
	if(!CMapStringToOb::Lookup(key,pO))
		Order.Add(key);
	CMapStringToOb::SetAt(key,newValue);
}

void NMapStringToOb::RemoveAt(INT_PTR nIndex)
{
	const CString &key = Order.GetAt(nIndex);
	if(!key.IsEmpty())
	{
		CMapStringToOb::RemoveKey(key);
		Order.RemoveAt(nIndex, 1);
	}
}
BOOL NMapStringToOb::RemoveKey(LPCTSTR key)
{
	for(int i = 0;i < Order.GetSize(); ++i)
	{
		if(Order[i] == key)
		{
			Order.RemoveAt(i,1);
			break;
		}
	}
	return CMapStringToOb::RemoveKey(key);
}
POSITION NMapStringToOb::GetStartPosition()
{
	pos = 0;
	if(Order.GetSize() == 0)
		return NULL;
	return CMapStringToOb::GetStartPosition();// DUMMY POSITION 
// it is not usable in this class
}
void NMapStringToOb::GetNextAssoc(POSITION& rNextPosition, CString& rKey, CObject*& rValue) const
{
	if(pos < 0)// GetStartPosition was not called
	{
		rNextPosition = NULL;
		return;
	}
	int *ppos = (int *)&pos;
	if(pos + 1 >= Order.GetSize())
	{
		*ppos = (int)Order.GetSize();
		rKey = Order[Order.GetSize()-1];
		Lookup(rKey,rValue);
		rNextPosition = NULL;
		return;
	}
	rKey = Order[pos];
	Lookup(rKey,rValue);
	(*ppos)++;
	rNextPosition = (POSITION)1;
	return;
}

NMapStringToOb::NMapStringToOb(INT_PTR nBlockSize):CMapStringToOb(nBlockSize)
{
	ClearSelected();
}
CObject*& NMapStringToOb::operator[](LPCTSTR key)
{
	CObject *pO;
	if(!Lookup(key,pO))
		SetAt(key,NULL);
	return CMapStringToOb::operator [](key);
}
void NMapStringToOb::Serialize(CArchive &ar)
{
	Order.Serialize(ar);
	CMapStringToOb::Serialize(ar);
	if(ar.IsLoading())
		ClearSelected();
}

void NMapStringToOb::MoveBefore(const CString& Key, const CString& inKey)
{
//Move inKey element before Key element
	CObject *pO;
	if(Key == inKey)
		return;
	if(!Lookup(Key,pO))
		return;
	if(!Lookup(inKey,pO))
		return;
	int ini=0;
	for(;ini<Order.GetSize();ini++)
		if(Order[ini] == inKey)
			break;
	Order.RemoveAt(ini,1);
	int i=0;
	for(;i<Order.GetSize();i++)
		if(Order[i] == Key)
			break;
	Order.InsertAt(i,inKey);
}

void * NMapStringToOb::operator [](int index)
{
	CString key;
	CObject *pO;
	if(index < 0 || index >= Order.GetSize())
		return NULL;

	key = Order[index];

	if(!CMapStringToOb::Lookup(key, pO))
		return NULL;
	
	return pO;
}

INT_PTR NMapStringToOb::GetSize() const
{
	return Order.GetSize();
}

BOOL NMapStringToOb::GetAt(INT_PTR index, CString &rKey, CObject *&rValue) const
{
	if(index < 0 || index >= Order.GetSize())
		return FALSE;
	rKey = Order[index];
	return CMapStringToOb::Lookup(rKey, rValue);
}

CString NMapStringToOb::GetKey(int index) const
{
	if(index < 0 || index >= Order.GetSize())
		return _T("");
	return Order[index];
}

int NMapStringToOb::GetIndex(const CString &str) const
{
	for(int i = 0; i < GetSize(); ++i)
		if(str == Order[i])
			return i;
	return -1;
}
int NMapStringToOb::GetIndexByShortName(const CString &str) const
{
	for(int i = 0; i < GetSize(); ++i)
	{
		CString Name = Order[i];
		int index = Name.ReverseFind( '\\' );
		Name.Delete(0, index + 1);
		CString Buf = str;
		if(Buf.MakeUpper() == Name.MakeUpper())
			return i;
	}
	return -1;
}
int NMapStringToOb::GetIndex(const CObject *pValue) const
{
	for(int i = 0; i < GetSize(); ++i)
	{
		CString rKey = Order[i];
		CObject *pC = NULL;
		CMapStringToOb::Lookup(rKey, pC);
		if(pC == pValue)
			return i;
	}
	return -1;
}
void NMapStringToOb::ClearSelected(void)
{
	Selected = -1;
}
int NMapStringToOb::GetSelected(void)
{
	return Selected;
}
//void NMapStringToOb::SetSelected(int i)
//{
//	Selected = i;
//}
const CString NMapStringToOb::GetSelectedKey(void)
{
	return GetKey(Selected);
}
void NMapStringToOb::SetSelectedKey(const CString &Key)
{
	Selected = GetIndex(Key);
}
bool NMapStringToOb::IsSelectedKey(const CString &Key)
{
	return (Selected == GetIndex(Key));
}

void NMapStringToOb::CopyFrom(NMapStringToOb* pMap)
{
	RemoveAll();
	if (pMap == nullptr)
		return;
	for (POSITION i = pMap->GetStartPosition(); i != NULL;)
	{
		CString key;
		CObject* pOb;
		pMap->GetNextAssoc(i, key, pOb);
		SetAt(key, pOb);
	}
}
