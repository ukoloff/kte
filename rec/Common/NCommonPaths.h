#pragma once
enum CommonFolder
{
	CF_MACHINES,
	CF_UNITS,
	CF_PROTOTYPES,
	CF_SETTINGS,
	CF_DEMO,
	CF_TOOLS
};

class AFX_EXT_CLASS NCommonPaths
{
public:


	NCommonPaths(const CString &Ver);
	~NCommonPaths(void);
	const CString GetPath(CommonFolder FolderID) const;
	const CString GetDefaultPath(CommonFolder FolderID) const;
	void SetPath(CommonFolder FolderID, const CString &Path);
protected:
	const CString &Version;
	const CString GetRegName(CommonFolder FolderID) const;
	const CString GetDefaultSuffix(CommonFolder FolderID) const;
};
