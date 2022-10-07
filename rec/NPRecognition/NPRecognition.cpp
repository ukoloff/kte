// NPRecognition.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "..\BRecognize\BTurnRec.h"

int main(int argc, char* argv[])
{
    if (argc != 3)
        exit(1);
    BTurnRec recE(argv[0], argv[1], argv[2]);
    auto res = recE.Proc();
    if (res == 0)
        exit(1);
}

