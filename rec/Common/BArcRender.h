#pragma once

#include "NCMB_API.h"
#include "GLee.h"
#include "GL\GL.h"
#include "GL\GLu.h"

class NCMB_API BArcRender
{
public:
	BArcRender(void);
	~BArcRender(void);
	static void SetArcStep(GLfloat ArcStep);
	static void SelectionMode(bool On);
	static GLUnurbsObj * GetNurbsRenderer(void) { return pGLArc;}

protected:
	static GLUnurbsObj *pGLArc;
//	static GLfloat NArcStep;

};
