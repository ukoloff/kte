#pragma once
#ifdef BRecognize_EXPORTS
#define BRecognize_API __declspec(dllexport)
#else
#define BRecognize_API __declspec(dllimport)
#endif
