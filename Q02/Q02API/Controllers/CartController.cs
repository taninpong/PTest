using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Q02API.Models;

namespace Q02API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private static List<Cart> Cart = new List<Cart>();
        private static List<Item> AddItem = new List<Item>();

        [HttpPost]
        public void Post([FromBody] Item value)
        {
            var item = new Item
            {
                Id = Guid.NewGuid().ToString(),
                Name = value.Name,
                Price = value.Price,
                Quantity = 999
            };
            AddItem.Add(item);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Item>> GetItem()
        {
            return AddItem;
        }

        [HttpGet("{id}")]
        public Item GetItemDetail(string id)
        {
            var data = AddItem.Find(x => x.Id == id.ToString());
            return data;
        }

        [HttpPost]
        public void PostCart([FromBody] Item value)
        {
            var cart = new Cart
            {
                Itemdata = new List<Item>(){
                    new Item(){
                        Name = value.Name,
                        Price = value.Price,
                        Quantity = value.Quantity,
                    }
                },
                TotalAmount = 0
            };
            Cart.Add(cart);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Cart>> GetCart()
        {
            return Cart;
        }

        // [HttpGet("{id}")]
        // public Cart GetCartbyId(string id)
        // {
        //     var data = Cart.Find(x => x.Id == id.ToString());
        //     return data;
        // }

    }
}
