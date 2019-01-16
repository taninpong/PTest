using System;

namespace Services
{
    public class Class1
    {
         public double totaldok(int salary,int year)
        {
            double dok = 12;
            double year = 3;
            double salary = 10000;
            for (int i = 0; i < year; i++)
            {
                double sum = salary * dok / 100;
                double d = salary + sum;
                salary = d;
                Console.WriteLine(d);
            }
            return 02;
        }
    }
}
