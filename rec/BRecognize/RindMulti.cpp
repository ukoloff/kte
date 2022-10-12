#include "pch.h"
#include "RindMulti.h"

RindMulti::RindMulti()
{
}

RindMulti::RindMulti(int i)
{
	resize(1);
	at(0) = i;
}

RindMulti::~RindMulti()
{
}
