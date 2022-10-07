// BPoint.cpp: implementation of the BPoint class.
//
//////////////////////////////////////////////////////////////////////

#include "stdafx.h"
#include "ConstDef.h"
#include "BPoint.h"
#include "BMatr.h"
#include "math.h"


#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[]=__FILE__;
#define new DEBUG_NEW
#endif

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////


BPoint::BPoint(double x, double y, double z , double h )
{
	c[0] = x;
	c[1] = y;
	c[2] = z;
	c[3] = h;
}
BPoint::BPoint(const BPoint &P0, double a0, const BPoint &P1, double a1)
{
	c[0] = P0.c[0] * a0 + P1.c[0] * a1;
	c[1] = P0.c[1] * a0 + P1.c[1] * a1;
	c[2] = P0.c[2] * a0 + P1.c[2] * a1;
	c[3] = P0.c[3] * a0 + P1.c[3] * a1;
}

bool BPoint::operator ==(const BPoint &p) const
{
	if(p.c[0] != c[0])
		return false;
	if(p.c[1] != c[1])
		return false;
	if(p.c[2] != c[2])
		return false;
	if(p.c[3] != c[3])
		return false;
	return true;
}
BPoint BPoint::operator *(const BMatr &m) const
{
	return BPoint(
		c[0] * m.c[0][0] + c[1] * m.c[1][0] + c[2] * m.c[2][0] + c[3] * m.c[3][0],
		c[0] * m.c[0][1] + c[1] * m.c[1][1] + c[2] * m.c[2][1] + c[3] * m.c[3][1],
		c[0] * m.c[0][2] + c[1] * m.c[1][2] + c[2] * m.c[2][2] + c[3] * m.c[3][2],
		c[0] * m.c[0][3] + c[1] * m.c[1][3] + c[2] * m.c[2][3] + c[3] * m.c[3][3]);
}

void BPoint::Set(double x, double y, double z, double h)
{
	c[0] = x;
	c[1] = y;
	c[2] = z;
	c[3] = h;
}
void BPoint::Get(double &x, double &y, double &z, double &h) const
{
	x = c[0];
	y = c[1];
	z = c[2];
	h = c[3];
}

double BPoint::Cos2(const BPoint &p1,const BPoint &p2)
{
	double	d1 = p1.D2(),
			d2 = p2.D2();
	if(d1 < DMIN*DMIN || d2 < DMIN*DMIN)
		return 0;
	return p1*p2/(d1*d2);
}

double BPoint::Dist2(const BPoint &p1, const BPoint &p2) 
{
	return (p2-p1).D2();
}
/*
BPoint BPoint::operator -(const BPoint &p) const
{
	return BPoint(c[0] - p.c[0], c[1] - p.c[1], c[2] - p.c[2], c[3] - p.c[3]);
}
*/
BPoint BPoint::operator +(const BPoint &p) const
{
	return BPoint(c[0] + p.c[0], c[1] + p.c[1], c[2] + p.c[2], c[3] + p.c[3]);
}
const BPoint BPoint::operator *(double a) const
{
	return BPoint(c[0] * a, c[1] * a, c[2] * a, c[3] * a);
}
const BPoint &BPoint::Mult(const BPoint &P, double a)
{
	c[0] = P.c[0] * a;
	c[1] = P.c[1] * a;
	c[2] = P.c[2] * a;
	c[3] = P.c[3] * a;
	return *this;
}

BPoint operator *(double a, const BPoint &P)
{
	return P * a;
}

BPoint BPoint::operator %(const BPoint &p) const
{
	return BPoint(
		c[1]*p.c[2] - c[2]*p.c[1],
		c[2]*p.c[0] - c[0]*p.c[2],
		c[0]*p.c[1] - c[1]*p.c[0],
		0.
		);
}
BPoint & BPoint::XY2XZ()
{
// Y <-> Z
	double b;
	b=c[1];c[1]=c[2];c[2]=b;
	return *this;
}
BPoint & BPoint::XY2YZ()
{
// X <-> Z
	double b;
	b=c[0];c[0]=c[2];c[2]=b;
	return *this;
}

const double * BPoint::GetArray() const
{
	return c;
}

double BPoint::Angle(const BPoint &v) const
{
// Calculates angle between two vectors in degrees
// does not check if the points are correct vectors
// It is assumed that vectors lie in  XY plane
// Result is from -180 to 180
	double sign = ((*this % v).GetZ() > 0.) ? 1. : -1.;

	return Angle0_180(v) * sign;
}

double BPoint::Angle0_180(const BPoint &v) const
{
// Calculates angle between two vectors in degrees
// does not check if the points are correct vectors
// Result is from 0 to 180
	double c = (*this * v);
	double z = D2() * v.D2();
	if( z == 0. )
		return 0.;
	c = c/sqrt(z);
	c = c < -1. ? -1. : c;
	c = c >  1. ?  1. : c;

	return acos(c) * 180. / PI;
}

double BPoint::Angle(const BPoint &v, const BPoint &N) const
{
// Calculates angle between two vectors in degrees
// does not check if the points are correct vectors
// N is the normal vector for vectors plane
// Result is from -180 to 180
	double sign = ((*this % v) * N > 0.) ? 1. : -1.;

	return Angle0_180(v) * sign;
}

const BPoint & BPoint::Norm()
{
	if( c[3] > HMIN )
	{
		double d = 1./c[3];
		c[0] *= d;
		c[1] *= d;
		c[2] *= d;
		c[3] = 1.;
	}
	return *this;
}

const BPoint & BPoint::Unit()
{
	*this *= (1. / sqrt(D2()));
	return *this;
}

bool BPoint::IsVector(void) const
{
	return c[3] == 0.;
}
bool BPoint::IsPoint(void) const
{
	return c[3] > 0.;
}
const BPoint & BPoint::ProjXY(void)
{
	c[2] = 0.;
	return *this;
}

void BPoint::LineLine(const BPoint &p1, const BPoint &e1, const BPoint &p2, const BPoint &e2, BPoint &q1, BPoint &q2)
{
	double	A1 = e1.D2(),
		B1 = -(e1 * e2),
		H1 = e1 * (p2 - p1),
		A2 = -B1,
		B2 = -(e2.D2()),
		H2 = e2 * (p2 - p1),
		det = A1 * B2 - B1 * A2,
		det1 = H1 * B2 - B1 * H2,
		det2 = A1 * H2 - H1 * A2;
	BPoint S(0., 0., 0., 1.);
	if (fabs(det) > MIND * MIND * MIND * MIND)
	{// intersects
		double t1 = det1 / det;
		double t2 = det2 / det;
		q1 = p1 + e1 * t1;
		q2 = p2 + e2 * t2;
		return;
	}
	double e1D2 = e1.D2();
	double e2D2 = e2.D2();
	if (e1D2 < MIND * MIND || e2D2 < MIND * MIND)
	{
		q1 = p1;
		q2 = p2;
		return;
	}
	// parallel
	q1 = p1;
	double t = ((p2 - p1) * (p2 - p1)) / (e2 * (p1 - p2));
	q2 = p2 + e2 * t;
}

double BPoint::LineLineD2(const BPoint &p1, const BPoint &e1, const BPoint &p2, const BPoint &e2)
{
	double	A1 = e1.D2(),
		B1 = -(e1 * e2),
		H1 = e1 * (p2 - p1),
		A2 = -B1,
		B2 = -(e2.D2()),
		H2 = e2 * (p2 - p1),
		det = A1 * B2 - B1 * A2,
		det1 = H1 * B2 - B1 * H2,
		det2 = A1 * H2 - H1 * A2;
	BPoint S(0., 0., 0., 1.);
	if (fabs(det) > MIND * MIND * MIND * MIND)
	{// intersects
		double t1 = det1 / det;
		double t2 = det2 / det;
		return (p1 + e1 * t1, p2 + e2 * t2).D2();
	}
	double e1D2 = e1.D2();
	double e2D2 = e2.D2();
	if (e1D2 < MIND * MIND || e2D2 < MIND * MIND)
		return (p2 - p1).D2();
// parallel
	double Cos2 = H1 * H1 / (e1D2 * e2D2);
	return (p2 - p1).D2() * fabs(1. - Cos2);

}

double BPoint::LineD2(const BPoint &p1,const BPoint &p2) const
{
	// Distance (2) from this point to straight line
	BPoint b(p2);
	b -= p1;
	double z = b.D2();
	if( z < DMIN * DMIN)
		return 0.;
	BPoint v(*this);
	v -= p1;
	double a = b * v;
	return v.D2() - (a * a) / z;
}

bool BPoint::InTriangle(BPoint &A,BPoint &B, BPoint &C)
{
	BPoint	AB = B - A, 
			BC = C - B,
			CA = A - C,
			AP = *this - A,
			BP = *this - B,
			CP = *this - C,
			Normal = AB % BC;
	if((Normal%AB)*AP>=0 && (Normal%BC)*BP>=0 && (Normal%CA)*CP>=0)
		return true;
	else
		return false;
}

bool BPoint::InLine(BPoint &A,BPoint &B)
{
	BPoint	AP = *this - A,
			BP = *this - B,
			AB = B - A;
	if(AB*AP>=0 && AB*BP<=0)//����� ��������� ����� ������ ���� �����
		return true;
	return false;//����� ��������� �� ����� � ���� �����
}

double BPoint::DistTriangle(float Tr[9], double drec, BPoint &M, unsigned int &NumVertex, unsigned int &Type)//������� ���������� �� ����� �� ������������
{
	double rec;
	BPoint A(double(Tr[0]), double(Tr[1]), double(Tr[2]), 1.);
	BPoint B(double(Tr[3]), double(Tr[4]), double(Tr[5]), 1.);
	BPoint C(double(Tr[6]), double(Tr[7]), double(Tr[8]), 1.);
	BPoint AB = B - A;
	BPoint BC = C - B;
	BPoint AP = *this-A;		//����� P � ������� ���� �����!
	BPoint N = AB % BC;		//����������� ������������ ������� ������������
	BPoint O = *this + N*( ((A-*this)*N) / (N*N) );
	rec = fabs((AP*N)*(1./sqrt(N*N)));
	if(rec > drec + MIND)//���� ���������� �� ��������� ����� >= ����������� �������
	{
		Type = 0;//��� ���� ����� ������� NumVertex ������������
		return drec; 
	}
	else
	{	
		Type = 3;//rec �������� �� ������������� �����
		BPoint CA = A - C;
		BPoint BP = *this-B;
		BPoint CP = *this-C;
		if(InTriangle(A, B, C) == false)//���� ��������� �������������� �� ����� �� �����
		{
			bool fa = true, fb = true, fc = true;//�� ��������� ������ ��������� �����. �� ���� ������
			double d;
			rec = 1.e20;
			if(InLine(A, B)==true)//����� P ����� � ���� AB
			{
				O = A+AB*(AB*(*this-A)/(AB*AB));
				rec = (*this-O).D2();//������� ���������� �� P �� AB
				NumVertex = 2;//��������������� ����� ������� C ��� ������� 2 (A-0,B-1,C-2)
				Type = 2;
				fa = false;
				fb = false;
			}
			if(InLine(B, C)==true)//����� P ����� � ���� BC
			{
				BPoint O1 = B+BC*( BC*(*this-B)/(BC*BC) );
				d = (*this-O1).D2();//������� ���������� �� P �� BC
				if(d < rec)
				{
					rec = d;
					O = O1;
					NumVertex = 0;
					Type = 2;
				}
				fb = false;
				fc = false;
			}
			if(InLine(C, A)==true)//����� P ����� � ���� CA
			{
				BPoint O1 = C+CA*(CA*(*this-C)/(CA*CA));
				d = (*this-O1).D2();//������� ���������� �� P �� CA
				if(d < rec)
				{
					rec = d;
					O = O1;
					NumVertex = 1;
					Type = 2;
				}
				fa = false;
				fc = false;
			}
			if(fa == true)
			{
				d = AP.D2();//��������� ������� ���������� �� ����� A
				if(d < rec)
				{
					rec = d;
					O = A;
					NumVertex = 0;//��������� ����� - ������� A ��� ������� 0
					Type = 1;
				}
			}
			if(fb == true)
			{
				d = BP.D2();//��������� ������� ���������� �� ����� B
				if(d < rec)
				{
					rec = d;
					O = B;
					NumVertex = 1;
					Type = 1;
				}
			}
			if(fc == true)
			{
				d = CP.D2();//��������� ������� ���������� �� ����� C
				if(d < rec)
				{
					rec = d;
					O = C;
					NumVertex = 2;
					Type = 1;
				}
			}
			rec=sqrt(rec);//��������� ��� ������
		}	
	}
	if(rec <= drec + MIND)
	{
		M = O;//�������� ��������� �����, Type ��� ��������, NumVertex - ����.
		return rec;
	}
	else
	{
		Type = 0;//������ �� �� ������ 
		return drec;
	}
}

void BPoint::Setx(double x)
{
	c[0] = x * c[3];
}
void BPoint::Sety(double y)
{
	c[1] = y * c[3];
}
void BPoint::Setz(double z)
{
	c[2] = z * c[3];
}
void BPoint::MiddlePoint(const BPoint &P0, const BPoint &P1)//���������� ����� �� �������� ������� � ������� P0 � P1
{
	*this = (P0 + P1) * 0.5;
}
void BPoint::GravTo0(void)
{
	if(fabs(c[0]) < DMIN)
		c[0] = 0.;
	if(fabs(c[1]) < DMIN)
		c[1] = 0.;
	if(fabs(c[2]) < DMIN)
		c[2] = 0.;
}
double BPoint::Dist2Triangle(const BPoint src[3],const BPoint &n, double rec2, BPoint &M, unsigned int &NumVertex, unsigned int &Type) const//������� ������� ���������� �� ����� �� ������������ 
{//���������� �������� ���������� �� ����� �� ������������
	//SetH(1);
	BPoint vad = *this;//������ AD (�� ������� �� � ���� �����)
    vad.SetH(1);
	vad-=src[0];//������ �� ������� A � ����������� �����
	double h = n*vad;//��������� ������ ������� � ���������
	if(h*h>rec2+2*rec2*MIND+MIND*MIND)//���� ���������� �� ��������� ������ ������������� �������
	{//!!!!!!!!!!MIND ��� ������������� � ��������
		Type = 0;
		return rec2;
	}
	//������� �������� ����� �� ��������� �����������
	BPoint p=*this;
    p.SetH(1);
	p-=n*h;
	//������� ��� ���������� ������� ������������
	BPoint va = src[1],
		vb = src[2],
		vc = src[0];
	va-=src[0];
	vb-=src[1];
	vc-=src[2];
	//��������� �������������
	double vad2=va.D2(),
		vbd2=vb.D2(),
		vcd2=vc.D2();
	bool matchAB,matchBC, matchCA;
	matchAB=(vad2<MIND*MIND);
	matchBC=(vbd2<MIND*MIND);
	matchCA=(vcd2<MIND*MIND);
	//��������� ����������� �������� ������ ������������
	int sgn;
	if ((va%vb)*n>0)
		sgn=1;
	else
		sgn=-1;
	//������� ������� �� ������ ������������ � �������� ����� �� ��� ���������
	BPoint pa = p,
		pb = p,
		pc = p;
	pa-=src[0];
	pb-=src[1];
	pc-=src[2];

	bool la,lb,lc,lfta,lftb,lftc;
	//���������, ����� �� ������ �� ���������� ������� ������ �� ������ ������������
	lfta=((n*(va%pa)*sgn)>=0);
	lftb=((n*(vb%pb)*sgn)>=0);
	lftc=((n*(vc%pc)*sgn)>=0);

	if(lfta&&lftb&&lftc&&!matchAB&&!matchBC&&!matchCA)//���� ������ ������ ������������
	{
		M=p;
		Type = 3;
		return p.Dist2(p,*this);
	}

	Type = 2;
	//�������� ��������� ������������
	double sca = pa*va,//1�� �� ������
		val=va.D2();//����� ������� va
	la = ((sca>=0)&&(sca<=val));
	if((!lfta)&&la&&!matchAB)//���� ������ �� ����� A
	{
		NumVertex = 2;
		M = src[0]+va*(sca/va.D2());
		return (vad.D2()-sca*sca/va.D2());
	}
	double scb = pb*vb,//2�� �� ������
		vbl=vb.D2();//����� ������� vb
	lb = ((scb>=0)&&(scb<=vbl));
	if((!lftb)&&lb&&!matchBC)//���� ������ �� ����� B
	{
		BPoint vbd = *this;
        vbd.SetH(1);
		vbd-=src[1];
		NumVertex = 0;
		M = src[1]+vb*(scb/vb.D2());
		return (vbd.D2()-scb*scb/vb.D2());
	}
	double scc = pc*vc,//3� �� ������
		vcl=vc.D2();//����� ������� vc
	lc = ((scc>=0)&&(scc<=vcl));
	if((!lftc)&&lc&&!matchCA)//���� ������ �� ����� C
	{
		BPoint vcd = *this;
        vcd.SetH(1);
		vcd-=src[2];
		NumVertex = 1;
		M = src[2]+vc*(scc/vc.D2());
		return (vcd.D2()-scc*scc/vc.D2());
	}
	Type = 1;
	NumVertex = 2;
	M=src[2];
	if(!matchAB&&(scb>=vbl)&&(scc-MIND<=0))
		return this->Dist2(*this,src[2]);
	NumVertex = 0;
	M=src[0];
	if(!matchBC&&(scc>=vcl)&&(sca-MIND<=0))
		return this->Dist2(*this,src[0]);
	M=src[1];
	NumVertex = 1;
	//if(lftc) - ���� ����� ����������, ������� ����� ��������
	return this->Dist2(*this,src[1]);
}

double BPoint::CAbsSum(void) const
{
	return fabs(c[0]) + fabs(c[1]) + fabs(c[2]);
}

BPoint BPoint::Nearest2Lines(int LinesNum, BPoint **P, BPoint ** V)
{
	if (LinesNum < 2)
		return BPoint(0., 0., 0., -1.);
	BMatr MSum(0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0., 0.);
	BPoint PSum(0., 0., 0., 0.);
	for (int i = 0; i < LinesNum; ++i)
	{
		BMatr VV(1. - V[i]->GetX() * V[i]->GetX(), V[i]->GetX() * V[i]->GetY(), V[i]->GetX() * V[i]->GetZ(), 0.,
			V[i]->GetY() * V[i]->GetX(), 1. - V[i]->GetY() * V[i]->GetY(), V[i]->GetY() * V[i]->GetZ(), 0.,
			V[i]->GetZ() * V[i]->GetX(), V[i]->GetZ() * V[i]->GetY(), 1. - V[i]->GetZ() * V[i]->GetZ(), 0.,
			0., 0., 0., 1.);
		PSum += (*P[i]) * VV;
		MSum += VV;
	}
	return PSum * MSum.invr();
}

BPoint BPoint::Nearest2LinesD(int LinesNum, BPoint **P, BPoint ** V)
{
	if (LinesNum < 2)
		return BPoint(0., 0., 0., -1.);
	BPoint ResP(0., 0., 0., 0.);
	for (int i = 0; i < LinesNum - 1; ++i)
	{
		for (int j = i + 1; j < LinesNum; ++j)
		{
			BPoint Q1, Q2;
			LineLine(*P[i], *V[i], *P[j], *V[j], Q1, Q2);
			ResP += Q1 + Q2;
		}
	}
	ResP = ResP * (1. / (LinesNum * (LinesNum - 1)));
	return ResP;
}

const BPoint &BPoint::Round2Zero(void)
{
	if(fabs(c[0]) < 1.e-3)
		c[0] = 0.;
	if(fabs(c[1]) < 1.e-3)
		c[1] = 0.;
	if(fabs(c[2]) < 1.e-3)
		c[2] = 0.;
	return *this;
}

const BPoint &BPoint::Align2CoordAxis(void)
{
	// Find max coord index
	int MaxInd = 0;
	if(fabs(c[MaxInd]) < fabs(c[1]))
		MaxInd = 1;
	if(fabs(c[MaxInd]) < fabs(c[2]))
		MaxInd = 2;
	double Val = c[MaxInd];
	c[0] = c[1] = c[2] = 0.;
	c[MaxInd] = Val > 0. ? 1. : -1;
	return *this;
}

const BPoint BPoint::CAbs(void) const
{ // by coordinate
	return BPoint(fabs(c[0]), fabs(c[1]), fabs(c[2]), fabs(c[3]));
}

const BPoint BPoint::CMul(const BPoint &P) const
{ // by coordinate
	return BPoint(c[0] * P.c[0], c[1] * P.c[1], c[2] * P.c[2], c[3] * P.c[3]);
}

const BPoint BPoint::CDiv(const BPoint &P) const
{ // by coordinate
	return BPoint(c[0] / P.c[0], c[1] / P.c[1], c[2] / P.c[2], c[3] / P.c[3]);
}

const BPoint BPoint::Decomp(const BPoint &X, const BPoint &Y, const BPoint &Z) const
{
	// return (x, y, z, *) where this = x * X + y * Y + z * Z
	BMatr B;
	B.SetRow(0, X);
	B.SetRow(1, Y);
	B.SetRow(2, Z);
	return (*this) * B.invr();
}

BPoint BPoint::ProjectPointOnPlane(const BPoint& iPoint, const BPoint& iOrigin, const BPoint& iNormal)
{
	BPoint normal = iNormal;
	normal.Unit();
	return iPoint - normal * ((iPoint - iOrigin) * normal);
}

double ClampD(double n, double min, double max) {
	//Clamp value n on min or max
	if (n < min) return min;
	if (n > max) return max;
	return n;
}

BPoint BPoint::LineRayCast(const BPoint & BP, const BPoint & EP, const BPoint & P, const BPoint & V, double Epsilon)
{

	BPoint lineDir = EP - BP;
	BPoint r = P - BP;
	double squaredRay = V * V;
	double squaredLine = lineDir * lineDir;
	double f = lineDir * r;

	double vectorT = 0.0, lineT = 0.0;
	BPoint pointOnRay, pointOnLine;

	double c = V * r;
	if (squaredLine <= MINAR) {
		lineT = 0.0f;
		vectorT = ClampD(-c / squaredRay, 0.0f, 1.0f);
	}
	else {
		double b = V * lineDir;
		double denom = squaredRay*squaredLine - b*b;
		if (denom != 0.0f) {
			double nT = (b*f - c*squaredLine) / denom;
			vectorT = nT < 0.0 ? 0.0 : nT;
		}
		else vectorT = 0.0f;

		lineT = (b*vectorT + f) / squaredLine;

		if (lineT < 0.0f) {
			lineT = 0.0f;
			vectorT = ClampD(-c / squaredRay, 0.0f, 1.0f);
		}
		else if (lineT > 1.0f) {
			lineT = 1.0f;
			vectorT = ClampD((b - c) / squaredRay, 0.0f, 1.0f);
		}
	}
	pointOnRay = P + V * vectorT;
	pointOnLine = BP + lineDir * lineT;
	if (sqrt((pointOnRay - pointOnLine).D2()) < Epsilon)
		return pointOnLine;
	else
		return BPoint(0, 0, 0, -1);
}

const BPoint& BPoint::FlipXY(void)
{
	auto buf = GetX();
	SetX(GetY());
	SetY(buf);
	return *this;
}



