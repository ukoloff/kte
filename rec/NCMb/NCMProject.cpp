#include "stdafx.h"
#include "BObjectManager.h"
#include "NCMVersion.h"
#include "NFont.h"
#include <direct.h>
#include <io.h>
#include <sys/stat.h>
#include "NCMProject.h"

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#define new DEBUG_NEW
#endif

NCMProject Project;
NCMProject &NCMProject::ActiveProject = Project;
NCMProject::NCMProject(void) :
CommonPaths(NCMVersion) , Defaults(*GenNTiParams())
{
	
	pObjectManager = new BObjectManager;
	InFileVersion = 1.;
	FloatingLicense = false;
	pPExport = NULL;
	SetDefaultSettings();
}

NCMProject::~NCMProject(void)
{
	delete pObjectManager;

	POSITION pos;
	CString key;
	// Delete all colors from Colors map
	NColor *c;
	for(pos = Colors.GetStartPosition(); pos != NULL;)
	{
		Colors.GetNextAssoc(pos, key, c);
		delete c;
	}
	Colors.RemoveAll();
	// Delete doubles
	double *pDouble;
	for(pos = DoubleParams.GetStartPosition(); pos != NULL;)
	{
		DoubleParams.GetNextAssoc(pos, key, pDouble);
		delete pDouble;
	}
	DoubleParams.RemoveAll();
	// Delete ints
	int *pInt;
	for(pos = IntParams.GetStartPosition(); pos != NULL;)
	{
		IntParams.GetNextAssoc(pos, key, pInt);
		delete pInt;
	}
	IntParams.RemoveAll();
	// Delete fonts
	NFont *f;
	for(pos = Fonts.GetStartPosition(); pos !=NULL;)
	{
		Fonts.GetNextAssoc(pos, key, f);
		delete f;
	}
	Fonts.RemoveAll();
	Defaults.Clear();
}
int NCMProject::StartNewProject(void)
{
	return 0;
}
int NCMProject::CloseProject(void)
{
	return 0;
}
void NCMProject::Serialize(CArchive &ar, const CString& DocPath)
{
	//SerializeElements(ar, pObjectManager, 1);
	//if(pObjectManager != NULL)
	//{
	//	if(ar.IsLoading())
	//		pObjectManager = new BObjectManager;
	//	pObjectManager->Serialize(ar);
	//}
	//if(!(ar.IsLoading() && NCM_PROJECT.GetInFileVersion() < atof("4.4")))
	{
		SerializeElements(ar, &UnitContFile, 1);
		SerializeElements(ar, &DFNFile, 1);
		SerializeElements(ar, &DefaultsFile, 1);
		StockFile.Serialize(ar);
		MachineFile.Serialize(ar);
		PartsFile.Serialize(ar);
		ExObjsFile.Serialize(ar);
		if(ar.IsLoading())
		{
			if(!MachineFile.IsEmpty())
			{
				CString NewPath = GetMachinesPath() + _T("TempMachine\\");
				MakeTempMachDir();
				SaveStr2File(NewPath +_T("MAIN.xml"), MachineFile[1], true);
				for(INT_PTR i = 2; i < MachineFile.GetSize(); i += 2)
				{
					SaveStr2File(NewPath + MachineFile[i], MachineFile[i + 1], true);
				}
			}
			
			for (INT_PTR i = 0; i < StockFile.GetSize(); i += 2)
			{
				if (StockFile[i].IsEmpty())
					continue;
				SaveStr2File(DocPath + StockFile[i], StockFile[i + 1], false);
			}
			for (INT_PTR i = 0; i < ToolFile.GetSize(); i += 2)
			{
				if (ToolFile[i].IsEmpty())
					continue;
				SaveStr2File(DocPath + ToolFile[i], ToolFile[i + 1], false);
			}
			for (INT_PTR i = 0; i < PartsFile.GetSize(); i += 2)
			{
				SaveStr2File(DocPath + PartsFile[i] + _T(".stl"), PartsFile[i + 1], false);
			}
			for(INT_PTR i = 0; i < ExObjsFile.GetSize(); i += 2)
			{
				SaveStr2File(DocPath + ExObjsFile[i] + _T(".stl"), ExObjsFile[i + 1], false);
			}
		}
		else
		{
			UnitContFile.Empty();
			DFNFile.Empty();
			DefaultsFile.Empty();
			MachineFile.RemoveAll();
		}
		PartsFile.RemoveAll();
		ToolFile.RemoveAll();
		ExObjsFile.RemoveAll();
		StockFile.RemoveAll();
	}
}

NCMProject &NCMProject::GetProject(void)
{
	return ActiveProject;
}

void NCMProject::SetDefaultSettings()
{
	// Doubles
	double *pDouble;
	pDouble = new double(3.);
	DoubleParams["CircleTolerance"] = pDouble;

	pDouble = new double(5.);
	DoubleParams["SelectionRegion"] = pDouble;

	pDouble = new double(5.);
	DoubleParams["ToolMarker"] = pDouble;

	pDouble = new double(10.);
	DoubleParams["SnapMarker"] = pDouble;

	pDouble = new double(4.);
	NCM_PROJECT.DoubleParams["Axes1Size"] = pDouble;

	pDouble = new double(4.);
	NCM_PROJECT.DoubleParams["Axes2Size"] = pDouble;

	pDouble = new double(4.);
	NCM_PROJECT.DoubleParams["Axes3Size"] = pDouble;

	pDouble = new double(0.1);
	NCM_PROJECT.DoubleParams["WeldBeamR"] = pDouble;

	pDouble = new double(0.1);
	DoubleParams["ModTolerance"] = pDouble;

	pDouble = new double(0.1);
	DoubleParams["ModToleranceTurn"] = pDouble;

	pDouble = new double(0.1);
	DoubleParams["ModToleranceMillTurn"] = pDouble;

	pDouble = new double(0.1);
	DoubleParams["ModToleranceWeld"] = pDouble;

	pDouble = new double(0.001);
	DoubleParams["ContTolerance"] = pDouble;

	pDouble = new double(0.01);
	DoubleParams["TolLineApp"] = pDouble;

	pDouble = new double(0.0002);
	DoubleParams["DevArcSpan"] = pDouble;

	pDouble = new double(0.05);
	DoubleParams["MinRadArc"] = pDouble;

	pDouble = new double(30.);
	DoubleParams["ProgToolAxesLength"] = pDouble;

	pDouble = new double(5.);
	DoubleParams["ProgNodesSize"] = pDouble;

	pDouble = new double(1.);
	DoubleParams["ProgToolAxesThickness"] = pDouble;

	// Ints
	int *pInt;
	pInt = new int(8);
	IntParams["ToolMash"] = pInt;
	pInt = new int(500);
	IntParams["ViewChangeTime"] = pInt;
	pInt = new int(1);
	IntParams["√радиентный‘он"] = pInt;
	pInt = new int(0);
	IntParams["CutHelix"] = pInt;
}
CString NCMProject::GetMachinesPath(void) const
{
	return CommonPaths.GetPath(CF_MACHINES);
}

CString NCMProject::GetUnitsPath(void) const
{
	return CommonPaths.GetPath(CF_UNITS);
}

CString NCMProject::GetSettingsPath(void) const
{
	return CommonPaths.GetPath(CF_SETTINGS);
}

CString NCMProject::GetPrototypesPath(void) const
{
	return CommonPaths.GetPath(CF_PROTOTYPES);
}

CString NCMProject::GetToolsPath(void) const
{
	return CommonPaths.GetPath(CF_TOOLS);
}

CString NCMProject::GetDemoPath(void) const
{
	return CommonPaths.GetPath(CF_DEMO);
}

int NCMProject::LoadFile2Str(const CString &Path, CString &Str)
{
	CStdioFile f;
	if(!f.Open(Path, CFile::typeBinary | CFile::modeRead ))
		return 0;
	int n = __min(int(f.GetLength()), INT_MAX);
	n = f.Read(Str.GetBuffer(n), n);
	Str.ReleaseBuffer(n);
	f.Close();
	return n;
}

int NCMProject::SaveStr2File(const CString &Path, const CString &Str, bool AllowRewrite)
{
	CStdioFile f;
	if (!AllowRewrite && f.Open(Path, CFile::modeRead | CFile::typeBinary)) // to prevent rewriting existing file
	{
		f.Close();
		return 0;
	}
	if (!f.Open(Path, CFile::modeCreate | CFile::modeWrite | CFile::typeBinary))
		return 0;
	f.Write(Str, Str.GetLength());
	f.Close();
	return Str.GetLength();
}

BOOL NCMProject::IsDots(const TCHAR* str)
{
    if(_tcscmp(str,".") && _tcscmp(str,"..")) return FALSE;
    return TRUE;
}

BOOL NCMProject::DeleteDirectory(const TCHAR* sPath, bool KeepFolder/* = false*/)
{
    HANDLE hFind;  // file handle

    WIN32_FIND_DATA FindFileData;

    TCHAR DirPath[MAX_PATH];
    TCHAR FileName[MAX_PATH];

    _tcscpy(DirPath,sPath);
    _tcscat(DirPath,"\\*");    // searching all files

    _tcscpy(FileName,sPath);
    _tcscat(FileName,"\\");

    hFind = FindFirstFile(DirPath,&FindFileData); // find the first file
    if(hFind == INVALID_HANDLE_VALUE) return FALSE;
    _tcscpy(DirPath,FileName);
        
    bool bSearch = true;
    while(bSearch) { // until we finds an entry
        if(FindNextFile(hFind,&FindFileData)) {
            if(IsDots(FindFileData.cFileName)) continue;
            _tcscat(FileName,FindFileData.cFileName);
            if((FindFileData.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY)) {

                // we have found a directory, recurse
                if(!DeleteDirectory(FileName)) { 
                    FindClose(hFind); 
                    return FALSE; // directory couldn't be deleted
                }
                RemoveDirectory(FileName); // remove the empty directory
                _tcscpy(FileName,DirPath);
            }
            else {
                if(FindFileData.dwFileAttributes & FILE_ATTRIBUTE_READONLY)
                    _chmod(FileName, _S_IWRITE); // change read-only file mode
                if(!DeleteFile(FileName)) {  // delete the file
                    FindClose(hFind); 
                    return FALSE; 
                }                 
                _tcscpy(FileName,DirPath);
            }
        }
        else {
            if(GetLastError() == ERROR_NO_MORE_FILES) // no more files there
            bSearch = false;
            else {
                // some error occured, close the handle and return FALSE
                FindClose(hFind); 
                return FALSE;
            }

        }

    }
    FindClose(hFind);  // closing file handle
 
    return KeepFolder ? TRUE : RemoveDirectory(sPath); // remove the empty directory

}

void NCMProject::MakeTempMachDir(void)
{
	CString NewPath = GetMachinesPath() + _T("TempMachine");
	int Res = _mkdir(NewPath);
	if(errno == EEXIST)
	{
		DeleteDirectory(NewPath, true);
//		Res = _mkdir(NewPath);
	}//if
}

bool NCMProject::ReadDirFiles(const CString &Path, const CString &Filter, CArray<CString> &Names)
{
	Names.RemoveAll();
	WIN32_FIND_DATA findFileData;
	HANDLE hFind = FindFirstFile(Path + Filter, &findFileData);
	if (hFind == INVALID_HANDLE_VALUE)
		return false;
	for (BOOL Stop = FALSE; !Stop; Stop = !FindNextFile(hFind, &findFileData))
	{
		if (findFileData.cFileName[0] != _T('.'))
			Names.Add(findFileData.cFileName);
	}
	FindClose(hFind);  // closing file handle

	return true;

}

double NCMProject::GetDouble(const CString &Name, double Default) const
{
	double *pDouble;
	if (DoubleParams.Lookup(Name, pDouble))
		return *pDouble;
	return Default;
}
