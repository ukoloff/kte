#include "stdafx.h"
#include "BArcRender.h"

GLUnurbsObj *BArcRender::pGLArc = NULL;
BArcRender ArcRender;

BArcRender::BArcRender(void)
{
	pGLArc = gluNewNurbsRenderer();
	gluNurbsProperty(pGLArc, GLU_SAMPLING_METHOD, GLU_PARAMETRIC_ERROR);
	SetArcStep(1.);
	SelectionMode(false);
}

BArcRender::~BArcRender(void)
{
	gluDeleteNurbsRenderer(pGLArc);
}

void BArcRender::SetArcStep(GLfloat ArcStep)
{
//	NArcStep = ArcStep;
//	gluNurbsProperty(pGLArc, GLU_PARAMETRIC_TOLERANCE, ArcStep * 0.1);
	gluNurbsProperty(pGLArc, GLU_SAMPLING_TOLERANCE, ArcStep);// This line added because of Vista ?????
	// This line works but brevious line doesn't work.
}
 
void BArcRender::SelectionMode(bool On)
{
	gluNurbsProperty(pGLArc, GLU_AUTO_LOAD_MATRIX, GLfloat(On ? GL_FALSE : GL_TRUE));// Needed for GL_SELECT works coorrectly
}
