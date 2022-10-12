#pragma once
#include <vector>
#include "NCadrGeom.h"
#include "RindMulti.h"

class RContour : public std::vector<NCadrGeom>
{
	friend class BTurnRec;
public:
	RContour();
	~RContour();
	int NewOrigin(int new_start);
	int CopyFrom(const RContour& cont, int start, int end = -1);
	void resize(size_t size);
	virtual void reverse() noexcept;
	virtual void Transform (const BMatr& matr);
protected:
	template<class Type> void NewOriginV(std::vector<Type>& vec, int new_start);
protected:
	std::vector<RindMulti> ind_; // мульти индексы элементов исходного контура
};
template<class Type>
inline void RContour::NewOriginV(std::vector<Type>& vec, int new_start)
{
	std::vector<Type> buf = vec;
	for (int i = 0; i < vec.size(); ++i)
		vec[i] = buf[(new_start + i) % vec.size()];
}

