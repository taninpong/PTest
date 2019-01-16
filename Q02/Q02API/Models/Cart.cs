using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Q02API.Models
{
    public class Cart
    {
        public List<Item> Itemdata { get; set; }
        public int TotalAmount { get; set; }

    }
}
