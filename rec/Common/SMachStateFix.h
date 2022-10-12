#pragma once

#include "BPoint.h"
#include "SMachState.h"

class AFX_EXT_CLASS SMachStateFix : public SMachState
{
public:
	SMachStateFix(void);
	SMachStateFix(const BPoint &XYZ, const BPoint &ABC);
	~SMachStateFix(void);

protected:
	static SCoordsDef FixedNames;
	

};
