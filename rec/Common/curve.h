#pragma once

#define CU_FAST 0x0001
#define CU_COOL 0x0002
#define CU_SPIN 0x0004
#define CU_SUBP 0x0008
#define CU_CYCL 0x0010
#define CU_LCOM 0x0020
#define CU_DCOM 0x0040
#define CU_CONF 0x0080 // Mach config changed
#define CU_ADDC 0x0100
#define CU_GROV 0x0200 // This cadr should be processed as a groove cadr
#define CU_SPLN 0x0400 // Spline
#define CU_PRBE 0x0800 // Probe
#define CU_TOUC 0x1000 // Touch
#define CU_RCP 0x2000 // RCPActive

#define CU_DEF 0x0000

#include "ResLocal.h"
enum curve
{
	undef = IDS_STATE_VALUE_undef,
	fast = IDS_STATE_VALUE_fast,
	line = IDS_STATE_VALUE_line,
	cwarc = IDS_STATE_VALUE_cwarc,
	ccwarc = IDS_STATE_VALUE_ccwarc,
	rotate = IDS_STATE_VALUE_rotate,
	addcoord = IDS_STATE_VALUE_addcoord
};
enum curveMod
{
	NotDefCM,
	HhArcTang,
	HhChamf,
	HhRound
};
