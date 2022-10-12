#define USEFONTBITMAPS 1
#define TEXTALIGNLEFT 3
#define TEXTALIGNRIGHT 4
#define TEXTALIGNCENTER 5

#pragma once

class Text
{
public:
	int mode;
	int align;
	UINT texID;
	int height;
	int width;
private:
	SIZE strwidth;
	HDC m_hDC;
public:
	bool Init( HDC hDC, int pmode, char * filename )
	{	
		mode = pmode;
		if( mode == USEFONTBITMAPS )
		{
			AddFontResource(filename);
			HFONT font =
			CreateFont( -height,		// logical height of font
			width,					// logical average character width
			0,						// angle of escapement
			0,						// base-line orientation angle
			FW_BOLD,				// font weight
			false,					// italic attribute flag
			false,					// underline attribute flag
			false,					// strikeout attribute flag
			RUSSIAN_CHARSET,		// character set identifier
			OUT_TT_PRECIS,			// output precision
			CLIP_DEFAULT_PRECIS,		// clipping precision
			ANTIALIASED_QUALITY,		// output quality
			FF_DONTCARE|DEFAULT_PITCH, // pitch and family 
			"OGL Font"			// pointer to typeface name string
			); 
			SelectObject(hDC, font);
			wglUseFontBitmaps (hDC, 0, 256, 1000);
			glListBase (1000);
			RemoveFontResource(filename);
			DeleteObject( font );
			m_hDC = hDC;
		}
		return true;
	}

	void Draw3D(double x, double y, double z, char * string) const
	{
		glRasterPos3d(x, y, z);
		glCallLists ( GLsizei(strlen( string )), GL_UNSIGNED_BYTE, string );
	}
	void Draw2D(double x, double y, int halign, double wndWidth,
				double wndHeight, char * string)
	{
		align = halign;
		glPushMatrix();
		glLoadIdentity();
		int LengthOfStrinf = int(strlen( string ));
		glOrtho (0.0, 1.0, 0.0, 1.0, -1.0, 1.0);
		if( mode == USEFONTBITMAPS )
		{
			GetTextExtentPoint32( m_hDC, string, LengthOfStrinf, &strwidth );
			switch ( align ) 
			{
				case TEXTALIGNRIGHT:
				glRasterPos2d( x, y );
				break;
				case TEXTALIGNLEFT:
				glRasterPos2d( x - strwidth.cx/wndWidth, y );
				break;
				case TEXTALIGNCENTER:
				glRasterPos2d( x - (strwidth.cx/2.0)/wndWidth, y );
				break;
				default:
				glRasterPos2d( x, y );
				break;
			}
			glCallLists ( LengthOfStrinf, GL_UNSIGNED_BYTE, string );
		}
		glPopMatrix();
	}
//************************************************************************
	Text()
	{
		mode = USEFONTBITMAPS;
		height = 14;
		width = 0;
		align = TEXTALIGNLEFT;
	}

    Text(int iHeight)
	{
		mode = USEFONTBITMAPS;
		height = iHeight;
		width = iHeight / 2;
		align = TEXTALIGNLEFT;
	}
//************************************************************************
	virtual ~Text()
	{
		glDeleteLists(1000, 256);
	}
};


