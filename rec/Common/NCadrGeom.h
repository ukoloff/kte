// NCadrGeom.h: interface for the NCadrGeom class.
//
//////////////////////////////////////////////////////////////////////
#pragma once

#include "NCMB_API.h"

#include "BCadrGeom.h"
#include "NCEnums.h"
#include "curve.h"
#include "BPoint.h"
class BBox;
class BMatr;
class NColor;
class NLine;
class BCurve;
class SMachStateFix;

class NCMB_API NCadrGeom
{
public:
	class NCMB_API Curve
	{
	public:
		Curve(void){};
		Curve(enum curve icurve)
		{ 
			if(icurve == fast)
			{
				type = line;
				flags = CU_FAST;
			}
			else
			{
				type = icurve;
				flags = CU_DEF;
			}
		};
		enum curve type:16;
		_int16 flags;
	};

	bool CalcCurTang(const BMatr & CorrMatr, double t, SMachStateFix & P);
	bool CalcCurCoordMS(const BMatr & CorrMatr, double t, SMachStateFix & P) const;
	void CalcCurCoord(double t, BPoint &XYZ, BPoint &ABC) const;
	void CalcCurCoordMCS(double t, const BMatr &MCS, BPoint &XYZ, BPoint &ABC) const;
	bool IsFast() const;
	bool IsPolar(void) const;
	bool IsCylindric(void) const;
	bool IsGeomValid(double eps) const;
	bool IsVertical(void) const;
	bool IsVerticalUp(void) const;
	bool IsHorizontal(void) const;
	bool IsLine(void) const;
	bool IsArc(void) const;
	bool IsFullArc(double eps) const;
	bool IsFull3DArc(double eps) const;
	bool Is3DArc(void) const;
	bool IsNotXYArc(void) const;
	bool IsSpline(void) const;
	bool IsMachConfCh(void) const;
	BPoint GetStartDir(void) const;
	BPoint GetStartDirP(void) const;
	BPoint GetEndDir(void) const;
	double GetBY() const { return yb; }
	BPoint GetB() const;
	BPoint GetE() const;
	BPoint GetBP() const;
	BPoint GetEP() const;
	BPoint GetN() const;
	BPoint GetI() const;
	BPoint GetC() const;
	void GetArcA(double *px,double *py,double *pz) const;
	void GetA(double *px,double *py,double *pz) const;
	double GetR() const;
	void GetC(double *px,double *py,double *pz) const;
	void Move(BPoint r);
	void GetN(double *px,double *py,double *pz) const;
	void GetI(double *pi,double *pj,double *pk) const;
	Curve GetType() const;
	const NCadrGeom & Tr(const BMatr &m);
	const NCadrGeom &SetX(double Val);
	const NCadrGeom &SetY(double Val);
	const NCadrGeom &SetZ(double Val);
	double Angle(const NCadrGeom &PrevCadr) const;
	enum Plane GetPlane() const;
	void SetAttr(unsigned char val);
	void SetPolar(void);
	void SetCylindric(void);
	bool IsStockTransf(void) const;
	void SetStockTransf(void);
	unsigned short GetAttr() const noexcept;
	bool HaveGeom() const;
	bool HaveGeom5() const;
	void ExpandWorkBox(BBox *pBox) const;
	void ExpandBox(BBox *pBox) const;
	void Clear();
	void ShiftZ(double s);
	void Offset(enum LR,double d);
	bool SetABSIJ(enum Plane pl);
	double Length() const;
	double GetRotSpecLength() const;
	double Deflect() const;
	void GetB(double *px,double *py,double *pz) const;
	void GetE(double *px,double *py,double *pz) const;
	void Set(Curve type,
		double xb,double yb,double zb,
		double xe,double ye,double ze,
		double i,double j,double k,
		enum Plane pl);
	void Set(Curve type,
		double xb,double yb,double zb,
		double xe,double ye,double ze);
	void Set(Curve type, const BPoint &Pb, const BPoint &Pe);
	void SetE(double xei,double yei,double zei);
	void SetN(double xni,double yni,double zni);
	void SetI(double xii,double yii,double zii);
	void SetB(double xbi, double ybi, double zbi);
	void SetE(const BPoint &);
	void SetN(const BPoint &);
	void SetI(const BPoint &);
	void SetB(const BPoint &);
	void SetType(Curve type);
	const NCadrGeom &TrEndPoint(const BMatr &m);
	static void FitCadrs(NCadrGeom *pPrev, NCadrGeom *pCur, bool BiArc);
	void SetTime(double T){ Time = float(T); }
	double GetTime(void) const { return double(Time); } ;
	void SetPl(enum Plane Pl);
	NCadrGeom();
	~NCadrGeom();

//protected:
	static void Line(double xb, double yb, double zb, double xe, double ye, double ze, bool fast);
	double xb;//начальная 
	double yb;
	double zb;
	double xe;//Конечная точка
	double ye;
	double ze;
	double i;//вектор из начала в центр
	double j;
	double k;
	double xn;//нормаль к плоскости
	double yn;
	double zn;
	enum  Plane pl;//плоскость, в которой лежит элемент
	BCurve * pCurve;
	Curve type;//тип линии
	unsigned short MatrNum;
	unsigned short InterpNum;
	unsigned short MSHistNum;
	unsigned short MTConfNum;
	unsigned char Attr;// 0-default;1-cycle; 2-spindle off;3 - разметка; 4 - кернение; 5 - поворот;6 - без обработки(TURN only); 7 - резание только в конце(TURN only)
protected:
	float Time;
public:
	bool CrArc(const BPoint & P0, const BPoint & P1, const BPoint & e0);
	int GetMatrNum(void) const;
	int GetMSHistNum(void) const;
	void SetMatrNum(int n);
	void SetMSHistNum(INT_PTR n);
	void SetInterpNum(int n);
	int GetInterpNum(void) const;
	const NCadrGeom & Reverse(void) noexcept;
	bool MoveToXY(void);
	bool IsInXYPlane(void);
	const NCadrGeom & ProjXY(void);
	const NCadrGeom& FlipXY(void);
	const NCadrGeom & MakeHorizontal(void);
	const NCadrGeom & MakeHorizontal(double inZ);
	const NCadrGeom & MakeVertical(void);
	bool DrawB(double Eps, double t) const;
	bool Draw(double Eps, double t) const;
	bool DrawCyl(double Eps, double t) const;
	bool DrawOrd(double Eps, double t) const;
	static void RestoreLineFont();
	static void SetLineFont(int mask = 0xf0f0);
	static bool Arc(	double xb,double yb,double zb,
				double xe,double ye,double ze,
				double xi,double yi,double zi,
				double xn,double yn,double zn,
				int type,enum Plane pl, double Eps);
	static void FastLine(double xb, double yb, double zb, double xe, double ye, double ze);
	static void LineSimple(double xb, double yb, double zb, double xe, double ye, double ze);
	static int compare_SPY(const void *a, const void *b);
	bool IsCycle(void) const noexcept;
	static enum Plane PlaneByNorm(const BPoint & N);
	static const BPoint NormByPlane(enum Plane Pl);
	static NColor FastMovCol;
	bool Draw5x(double Eps, double t) const;
	static double TotalAngle(const NCadrGeom* GeomArr, int Num);
	static int IsConvexGeom(const NCadrGeom* GeomArr, int Num);
	void SetCurve(BCurve *pCurve);
	BCurve * GetCurve(void) const;
	NCadrGeom(const NCadrGeom & In);
	const NCadrGeom & operator =(const NCadrGeom & In);
	const NCadrGeom & FullCopy(const NCadrGeom & In);
	bool GetStartABC(BPoint &ABC);
	bool GetEndABC(BPoint &ABC);
	void GetDeltaABC(BPoint &ABC);
	int GetNumAppr(double Eps) const;
	bool IsCWArc() const { return type.type == cwarc;}
	bool IsCCWArc() const { return type.type == ccwarc;}
	bool IsRotate() const { return type.type == ::rotate;}
	bool IsUndef() const { return type.type == undef;}
	void SetFast(bool fast);
	void SetSpline(bool spline);
	void SetGrooveFlag(bool IsGroove);

	void SetFlags(_int16 flags) { type.flags = flags; }
	bool IsFull5x(void) const;
	bool Is5x(void) const;
	double GetVolumeRot(void) const;
	int GetPolyLine(class BPointsBuf &Pts, double Eps, bool UseMatr) const;
	int GetPolyLineSize(double Eps);
	bool IsGroove(void) const;
	static int Divide(NCadrGeom & Source, double Angle, NCadrGeom & Dest);
	static int DivideX(NCadrGeom & Source, double XValue, NCadrGeom & Dest);
	static int DivideT(NCadrGeom & Source, double XValue, NCadrGeom & Dest);
	int DivideQuad(NCadrGeom *& pGeomArr) const;
	int CalcQuadsNum(void) const;
	bool IsNormalStandard(void) const;
	void Serialize(CArchive &ar);
	void ApplyMatr(void);
	bool LiesOnSameCurve(const NCadrGeom &In);
	bool IsPlaneCorrect(void) const;
	BPoint RayCast(const BPoint& P, const BPoint& V, double Epsilon) const;
	BMatr GetStockTransfMatr() const;
	int GetMTConfNum() const { return MTConfNum; }
	void SetMTConfNum(int ConfNum) { MTConfNum = unsigned short(ConfNum); }
	bool RepairArc();
	int CreateRArcXY(double x1, double y1, double z1,
		double x2, double y2, double z2, double R, curve CurveType, double MinArcDist);
private:
	BPoint LineRayCast(const BPoint& P, const BPoint& V, double Epsilon) const;
	BPoint CurveRayCast(const BPoint& P, const BPoint& V, double Epsilon) const;
	BPoint ArcRayCast(const BPoint& P, const BPoint& V, double Epsilon) const;
	BPoint ArcRayCastOnPlane(const BPoint& P, const BPoint& V, double Epsilon) const;
	bool IsPointOnArc(const BPoint& point) const;
};
