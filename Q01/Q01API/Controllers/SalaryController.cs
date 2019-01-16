using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Q01API.Models;

namespace Q01API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalaryController : ControllerBase
    {
        private static List<interest> dok = new List<interest>();

        [HttpPost]
        public void Post([FromBody] interest value)
        {
            double datasalary = value.Salary;
            double datadok = value.Dok;
            int datayear = value.Year;
            for (int i = 1; i <= datayear; i++)
            {
                double sum = datasalary * datadok / 100;
                double total = datasalary + sum;
                var newproduct = new interest
                {
                    Salary = datasalary,
                    Dok = datadok,
                    Total = total,
                    Year = i
                };
                dok.Add(newproduct);
                datasalary = total;
            }

        }

        [HttpGet]
        public ActionResult<IEnumerable<interest>> Get()
        {
            return dok;
        }
    }
}

