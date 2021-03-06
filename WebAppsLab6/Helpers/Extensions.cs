﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppsLab6.Helpers
{
    public static class Extensions
    {
        public static int CalculateAge(this DateTime birthdate)
        {
            int age = DateTime.Today.Year - birthdate.Year;
            Console.WriteLine(age);
            // adjust age if current year birthday hasn't happened yet
            if(DateTime.Today.CompareTo(new DateTime(DateTime.Today.Year, birthdate.Month, birthdate.Day)) < 0)
            {
                age -= 1;
            }
            return age;
        }
    }
}
