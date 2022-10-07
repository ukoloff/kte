#include "pch.h"
#include "RContour.h"
#include <list>

#ifdef _DEBUG
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#define new DEBUG_NEW
#endif

RContour::RContour()
{
}

RContour::~RContour()
{
}

int RContour::NewOrigin(int new_start)
{
	NewOriginV<NCadrGeom>(*this, new_start);
	NewOriginV<RindMulti>(ind_, new_start);
	return 1;
}

int RContour::CopyFrom(const RContour& cont, int start, int end)
{
	if (end < start)
		return 0;
	if (start == end)
	{
		start %= cont.size();
		resize(1);
		at(0).Set(line, cont.at(start).GetB(), cont.at(start).GetB());
		ind_.at(0) = RindMulti(-1);
	}
	else
	{
		resize(end - start);
		for (int i = start; i < end; ++i)
		{
			const auto j = i - start;
			at(j) = cont.at(i);
			ind_.at(j) = cont.ind_.at(i);
		}
	}
	return 1;
}

void RContour::resize(size_t size)
{
	std::vector<NCadrGeom>::resize(size);
	ind_.resize(size);
}

void RContour::reverse() noexcept
{
	for (int i = 0; i < size() / 2; ++i)
	{
		auto j = size() - i - 1;
		auto buf = at(i);
		at(i) = at(j);
		at(j) = buf;
		auto bufi = ind_.at(i);
		ind_.at(i) = ind_.at(j);
		ind_.at(j) = bufi;
	}
	for (int i = 0; i < size(); ++i)
		at(i).Reverse();
}

void RContour::Transform(const BMatr& matr)
{
	for (int i = 0; i < size(); ++i)
	{
		NCadrGeom& Geom = at(i);
		Geom.Tr(matr);
		const BPoint N = Geom.GetN();
		if (Geom.IsArc())
		{
			if (N * BPoint(0., 0., 1., 0.) < 0)
			{
				// invert arc
				if (Geom.IsCCWArc())
					Geom.SetType(cwarc);
				else
					Geom.SetType(ccwarc);
			}
		}
		Geom.SetN(0., 0., 1.);
	}
}


