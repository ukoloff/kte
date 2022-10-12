
#pragma once

// The following macros define the minimum required platform.  The minimum required platform
// is the earliest version of Windows, Internet Explorer etc. that has the necessary features to run 
// your application.  The macros work by enabling all features available on platform versions up to and 
// including the version specified.

// Modify the following defines if you have to target a platform prior to the ones specified below.
// Refer to MSDN for the latest info on corresponding values for different platforms.
#ifndef WINVER                          // Specifies that the minimum required platform is Windows Vista.
#define WINVER _WIN32_WINNT_VISTA           // Change this to the appropriate value to target other versions of Windows.
#endif

#ifndef _WIN32_WINNT            // Specifies that the minimum required platform is Windows Vista
#define _WIN32_WINNT _WIN32_WINNT_VISTA     // Change this to the appropriate value to target other versions of Windows.
#endif

#ifndef _WIN32_WINDOWS          // Specifies that the minimum required platform is Windows Vista.
#define _WIN32_WINDOWS 0x0500 // Change this to the appropriate value to target Windows Me or later.
#endif

#ifndef _WIN32_IE                // for TBS_NOTIFYBEFOREMOVE      // Specifies that the minimum required platform is Internet Explorer 6.0.
#define _WIN32_IE 0x0600        
#endif

#ifndef NTDDI_VERSION 
#define NTDDI_VERSION NTDDI_VISTA
#endif
