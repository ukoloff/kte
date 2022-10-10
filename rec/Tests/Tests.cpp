#include "pch.h"
#include "BTurnRec.h"
#include "CppUnitTest.h"

using namespace Microsoft::VisualStudio::CppUnitTestFramework;

namespace Tests
{
	TEST_CLASS(Tests)
	{
	public:
		
		void DoTest(const CString& name)
		{
			CString path;
			CString src = "..\\tests\\source\\" + name + ".txt";
			CString dest = "..\\tests\\curresult\\" + name + ".xml";
			CString test = "..\\tests\\testresult\\" + name + ".xml";
			BTurnRec Rec(path, src, dest);
			Assert::IsTrue(Rec.Proc() == 1);
			constexpr int SIZE = 100000;
			CFile cur;
			Assert::IsTrue(cur.Open(dest, CFile::typeText | CFile::modeRead));
			char* curres = new char[SIZE];
			char* testres = new char[SIZE]; 
			auto length_cur = cur.Read(curres, SIZE);
			cur.Close();
			Assert::IsTrue(cur.Open(test, CFile::typeText | CFile::modeRead));
			auto length_test = cur.Read(testres, SIZE);
			cur.Close();
			Assert::AreEqual(length_cur, length_test);
			for(UINT i = 0; i < length_test; ++i)
				Assert::AreEqual(curres[i], testres[i]);
			delete[] curres;
			delete[] testres;
		}
		TEST_METHOD(Test1)
		{
			DoTest("01");
		}
		TEST_METHOD(Test2)
		{
			DoTest("08");
		}
		TEST_METHOD(Test3)
		{
			DoTest("08z");
		}
		TEST_METHOD(Test4)
		{
			DoTest("08z1");
		}
		TEST_METHOD(Test5)
		{
			DoTest("08z2");
		}
		TEST_METHOD(Test6)
		{
			DoTest("f82");
		}
		TEST_METHOD(Test7)
		{
			DoTest("f821");
		}
		TEST_METHOD(Test8)
		{
			DoTest("f822");
		}
		TEST_METHOD(Test9)
		{
			DoTest("InputTest_1");
		}
		TEST_METHOD(Test0)
		{
			DoTest("InputTest_var2-2");
		}
		TEST_METHOD(Test11)
		{
			DoTest("InputTest_var3");
		}
		TEST_METHOD(Test12)
		{
			DoTest("InputTest_var4");
		}
		TEST_METHOD(Test13)
		{
			DoTest("InputTest_var5");
		}
		TEST_METHOD(Test14)
		{
			DoTest("InputTest_var6");
		}
		TEST_METHOD(Test15)
		{
			DoTest("InputTest_var7");
		}
		TEST_METHOD(Test16)
		{
			DoTest("InputTest_var7_1");
		}
		TEST_METHOD(Test17)
		{
			DoTest("InputTest_var15");
		}
		TEST_METHOD(Test18)
		{
			DoTest("InputTest_var15_1");
		}
		TEST_METHOD(Test19)
		{
			DoTest("InputTest_var15_2");
		}
		TEST_METHOD(Test20)
		{
			DoTest("InputTest_var15_3");
		}
		TEST_METHOD(Test21)
		{
			DoTest("InputTest_var16");
		}
		TEST_METHOD(Test22)
		{
			DoTest("InputTest_var24");
		}
		TEST_METHOD(Test23)
		{
			DoTest("InputTest_var24_1");
		}
		TEST_METHOD(Test24)
		{
			DoTest("InputTest_var24_2");
		}
		TEST_METHOD(Test25)
		{
			DoTest("InputTest_var25");
		}
		TEST_METHOD(Test26)
		{
			DoTest("InputTest_var28");
		}
		TEST_METHOD(Test27)
		{
			DoTest("InputTest_var30");
		}
		TEST_METHOD(Test28)
		{
			DoTest("var2");
		}
		TEST_METHOD(Test29)
		{
			DoTest("var21");
		}
		TEST_METHOD(Test30)
		{
			DoTest("var22");
		}
		TEST_METHOD(Test31)
		{
			DoTest("var23");
		}
	};
}
