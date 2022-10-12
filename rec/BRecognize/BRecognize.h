// BRecognize.h : main header file for the BRecognize DLL
//

#pragma once

#ifndef __AFXWIN_H__
	#error "include 'pch.h' before including this file for PCH"
#endif

#include "resource.h"		// main symbols


// CBRecognizeApp
// See BRecognize.cpp for the implementation of this class
//

class CBRecognizeApp : public CWinApp
{
public:
	CBRecognizeApp();

// Overrides
public:
	virtual BOOL InitInstance();

	DECLARE_MESSAGE_MAP()
};
