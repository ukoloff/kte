// NMapStringToOb.h: interface for the NMapStringToOb class.
//
//////////////////////////////////////////////////////////////////////

#pragma once

class AFX_EXT_CLASS NMapStringToOb : public CMapStringToOb  
{
public:
	int GetIndex(const CString &str) const;
	int GetIndexByShortName(const CString &str) const;
	int GetIndex(const CObject *pValue) const;
	CString GetKey(int i) const;
	BOOL GetAt(INT_PTR index, CString & rKey, CObject * & rValue)const;
	INT_PTR GetSize() const;
	void MoveBefore(const CString& Key, const CString& inKey);
	CObject*& operator[](LPCTSTR key);
	void* operator[](int index);
	NMapStringToOb(INT_PTR nBlockSize);
	void GetNextAssoc(POSITION& rNextPosition, CString& rKey, CObject*& rValue) const;
	POSITION GetStartPosition();
	BOOL RemoveKey(LPCTSTR key);
	void RemoveAt(INT_PTR nIndex);
	virtual void RemoveAll();
	void FullRemoveAll();
	NMapStringToOb();
	virtual ~NMapStringToOb();
	void SetAt(LPCTSTR key, CObject* newValue);
	void Serialize(CArchive& ar);
	void ClearSelected(void);
	int GetSelected(void);
//	void SetSelected(int i);
	const CString GetSelectedKey(void);
	void SetSelectedKey(const CString &Key);
	bool IsSelectedKey(const CString &Key);
	void CopyFrom(NMapStringToOb* pMap);
	DECLARE_SERIAL(NMapStringToOb)

protected:
	int pos;
	CStringArray Order;
	int Selected;
};


enum VisType
{
	VT_NO,
	VT_BYOBJ
};


class NToolCombined;
class NStock;
class NProgram;

typedef CTypedPtrMap<NMapStringToOb, CString, NProgram *> BMapStringToNProgram;
typedef CTypedPtrMap<NMapStringToOb, CString, NToolCombined *> CMapStringToNTool;
typedef CTypedPtrMap<NMapStringToOb, CString, NStock *> BMapStringToNStock;
