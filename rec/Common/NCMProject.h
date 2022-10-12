#pragma once
#include "NCommonPaths.h"
#include "RemoteCommands.h"
#include "ViewRules.h"
#include "NTiParams.h"

const int MODULES_NUM = 16;
class AFX_EXT_CLASS NGlobalState
{
public:
enum AnimModes
{
	Anim_no,
	Animation,
	Result
};

enum EditModes
{
	Edit_no,
	Edit_Mach,
	Edit_Unit,
	Edit_Extern
};

enum ModelModes
{
	MM_EMPTY,
	BSP,
	DX
};
enum ViewActionInd
{
	VA_ZOOM_ALL = 0,
	VA_PREP_PAN = 1,
	VA_PREP_ROT = 2,
	VA_PREP_ROTX = 3,
	VA_PREP_ROTY = 4,
	VA_PREP_ROTZ = 5,
	VA_PREP_SCALE = 6,
	VA_PREP_ZOOMW = 7,
	VA_DO_ZOOM = 8,
	VA_DO_EMPTY = 9,
	VA_SIZE = 10 // Must be 1 grater than maximum other index. Is used as array size.
};

	NGlobalState(void);
	~NGlobalState(void);
	bool GetCuttingMode(void) const;
	bool GetAnimateMode(void) const;
	bool GetResultMode(void) const;
	void SetCuttingMode(bool in);
	void SetAnimateMode(bool in);
	void SetResultMode(bool in);
	void SetEditMachMode(bool in);
	EditModes GetEditMode(void) const;
	void SetMultiThreadDX(bool Val) { MultiThreadDX = Val;}
	bool GetMultiThreadDX(void) const { return MultiThreadDX;} 
	ModelModes GetModelMode(void) const { return ModelMode;}
	void SetModelMode(ModelModes NewMode) { ModelMode = NewMode;}
	void Reset();
	void SetModes(bool Cutting, enum AnimModes Anim);
	AnimModes GetAnimMode(void) const;
	bool GetHostMode(void) const;
	void SetHostMode(bool Val);
	bool GetRibbonInterface() const { return RibbonInterface; }
	void SetRibbonInterface(bool Val) { RibbonInterface = Val; }
	void SetViewInterface(const CString & Style);
	const SubscribeStruct &GetSubStProgChange() const { return SubStProgChange; }
	void SetSubStProgChange(const SubscribeStruct &Val) { SubStProgChange = Val; }
	const SubscribeStruct &GetSubStColl() const { return SubStColl; }
	void SetSubStColl(const SubscribeStruct &Val) { SubStColl = Val; }
	bool ProcProgChangeSubscr(const CString &Name) const;
	bool ProcCollSubscr(const struct CollisionData &CollD) const;
	void AddViewRule(WORD Message, UINT nFlag, const VConditions & Conditions, int ViewActionInd, int StopMessage);
	std::pair<int, WORD> GetViewActionInd(WORD Message, UINT nFlags) const;
	void ClearViewRules() { VRules.Clear(); }
	void SetWheelReverse(BOOL Val) { WheelReverse = Val; }
	BOOL GetWheelReverse() { return WheelReverse; }

protected:
	bool CuttingMode;
	AnimModes AnimateMode;
	EditModes EditMode;
	ModelModes ModelMode;
	bool MultiThreadDX;
	bool HostMode;
	bool RibbonInterface;
	SubscribeStruct SubStProgChange;
	SubscribeStruct SubStColl;
	ViewRules VRules;
	BOOL WheelReverse;
};


typedef CTypedPtrMap<CMapStringToPtr, CString, int*> CMapStringToIntPtr;
typedef CTypedPtrMap<CMapStringToOb, CString, class NColor*> CMapStringToNColor;
typedef CTypedPtrMap<CMapStringToPtr, CString, double*> CMapStringToDoublePtr;
typedef CTypedPtrMap<CMapStringToOb, CString, class NFont*> CMapStringToNFont;

#define NCM_PROJECT NCMProject::GetProject()

class AFX_EXT_CLASS NCMProject
{
public:
	NCMProject(void);
	~NCMProject(void);
public:
	static NCMProject &GetProject(void);
	static int StartNewProject(void);
	static int CloseProject(void);
protected:
	void SetDefaultSettings();
	static NCMProject &ActiveProject;
	double InFileVersion;
	class ParticularExport *pPExport;
protected:
	class BObjectManager *pObjectManager;
	bool FloatingLicense;
	NCommonPaths CommonPaths;
	NGlobalState GlobalState;

public:
	CString UnitContFile;
	CString DFNFile;
	CStringArray StockFile;
	CStringArray ToolFile;
	CStringArray MachineFile;
	CString DefaultsFile;
	CStringArray PartsFile;
	CStringArray ExObjsFile;
	CMapStringToIntPtr IntParams;
	CMapStringToNColor Colors;
	CMapStringToDoublePtr DoubleParams;
	CMapStringToNFont Fonts;
	NTiParams & Defaults;
	void Serialize(CArchive &ar, const CString& DocPath);
	BObjectManager *GetObjectManager(void) { return pObjectManager;}
	double GetInFileVersion(){ return InFileVersion;}
	void SetInFileVersion(double Val){ InFileVersion = Val;}
	bool LockLicense(int i);
	bool UnlockLicense(int i);
	void ReleaseLicenses(void);
	void SetFloating(bool Fl) { FloatingLicense = Fl;}
	bool IsLicenseFloating(void) { return FloatingLicense;}
	class ParticularExport *GetParticularExport(void) const { return pPExport;}
	void SetParticularExport(class ParticularExport *pPE) { pPExport = pPE;}
	CString GetMachinesPath(void) const;
	CString GetUnitsPath(void) const;
	CString GetSettingsPath(void) const;
	CString GetPrototypesPath(void) const;
	CString GetToolsPath(void) const;
	CString GetDemoPath(void) const;
	NCommonPaths &GetCommonPaths(void) { return CommonPaths; }
	NGlobalState & GetGlobalState(void)	{ return GlobalState;}
	double GetDouble(const CString &Name, double Default) const;
	static int LoadFile2Str(const CString &Path, CString &Str);
	static int SaveStr2File(const CString &Path, const CString &Str, bool AllowRewrite);
	void MakeTempMachDir(void);
	static BOOL IsDots(const TCHAR* str);
	static BOOL DeleteDirectory(const TCHAR* sPath, bool KeepFolder = false);
	static bool ReadDirFiles(const CString &Path, const CString &Filter, CArray<CString> &Names);
};

