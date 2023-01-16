using System.Reflection;
using System.Security.Claims;
using BootCart.Model.RequestModels;
using BootCart.Model.ResponseModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BootCart.Controller
{

    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = "Customer")]
    public class CustomerController : ControllerBase
    {
        private readonly ApplicationDbContext db;
        private readonly UserManager<ApplicationUser> userManager;

        public CustomerController(
            ApplicationDbContext db, UserManager<ApplicationUser> userManager)

        {
            this.db = db;
            this.userManager = userManager;
        }


        [HttpGet("OrderItem/{pid}")]
        [ProducesResponseType(typeof(OrderItem), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> AddOrderItem(int pid)
        {
            var id = HttpContext.User.FindFirstValue("UserId");
            if (id == null)
                return NotFound();
            //var product = db.ProductSpecifications.ToListAsync();
            //foreach(var item in product)
            //{
            //    if(item)
            //}
            db.OrderItems.Add(new OrderItem()
            {
                UserId = id,
                ProductSpecificationId = pid,
                Quantity = 1,
                IndividulaItemPrice = 500
            });
            //var item = await db.Carts.FindAsync(pid);
            //db.Carts.Remove(item);
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpPut("OrderItem")]
        [ProducesResponseType(typeof(OrderItem), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> UpdateOrderItem(OrderItemModel model)
        {
            var id = HttpContext.User.FindFirstValue("UserId");
            // var Items = await db.OrderItems.FindAsync(model.Id);
            //if (Items == null)
            //    return NotFound();
            //Items.UserId = id;
            // Items.ProductId = 1;
            //Items.Quantity = model.Quantity;
            //Items.IndividulaItemPrice = model.IndividulaItemPrice;
            await db.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete("OrderItem")]
        [Authorize(Roles = "Customer")]
        [ProducesResponseType(typeof(OrderItem), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteOrderItem(int Id)
        {
            var Item = await db.OrderItems.FindAsync(Id);
            if (Item == null)
            {
                return NotFound();
            }
            db.OrderItems.Remove(Item);
            await db.SaveChangesAsync();
            return Ok("The corresponding item is deleted");
        }
        [HttpGet("OrderItem")]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> ViewOrderItem()
        {
            var id = HttpContext.User.FindFirstValue("UserId");
            var orderItems = db.OrderItems.Where(i => i.UserId == id);
            // var stock = await db.Products.ToListAsync();
            return Ok(orderItems);
        }
        [HttpGet("Cart/{id}")]
        //[Authorize(Roles = "Customer")]
        [ProducesResponseType(typeof(OrderItem), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]

        public async Task<IActionResult> AddToCart(int id)
        {
            var userId = HttpContext.User.FindFirstValue("UserId");

            if (id == null)
                return NotFound();

            db.Carts.Add(new Cart()
            {
                UserId = userId,
                ProductId = id,
            });

            await db.SaveChangesAsync();
            return Ok(id);
        }
        //[HttpPut("UpdateCart")]
        //[ProducesResponseType(typeof(Cart), StatusCodes.Status200OK)]

        //public async Task<IActionResult> UpdateCart(CartModel model)
        //{
        //    var id = HttpContext.User.FindFirstValue("UserId");
        //    var Items = await db.Carts.FindAsync(model.Id);
        //    if (Items == null)
        //        return NotFound();

        //    Items.UserId = id;
        //    Items.ProductId = 3;                
        //    await db.SaveChangesAsync();
        //    return Ok("Updated the cart");
        //}
        [HttpDelete("Cart/{cid}")]
        [Authorize(Roles = "Customer")]
        [ProducesResponseType(typeof(Cart), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteCart(int cid)
        {
            var cart = await db.Carts.FindAsync(cid);
            if (cart == null)
            {
                return NotFound();
            }
            db.Carts.Remove(cart);
            await db.SaveChangesAsync();
            return Ok(1);
        }


        [HttpGet("Cart")]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> ViewCart()
        {
            var id = HttpContext.User.FindFirstValue("UserId");
            var cart = await db.Carts.Include(i => i.ProductSpecification).ThenInclude(i => i.Products).Where(i => i.UserId == id).ToListAsync();
            return Ok(cart);
        }
        [HttpPost("Order")]
        [ProducesResponseType(typeof(OrderItem), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> PlaceOrder(OrderModel model)
        {
            var id = HttpContext.User.FindFirstValue("UserId");
            if (id == null)
                return NotFound();

            db.Orders.Add(new Order()
            {
               CustomerId = id,
               OrderedDate = DateTime.Now,
               DeliveryDate = DateTime.Now.AddDays(7),
               Address = model.Address,
               TotalAmount = model.TotalAmount,
               Status="Pending",

            });
            await db.SaveChangesAsync();
            return Ok("PlacedOrder");
        }

        [HttpGet("Order")]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> ViewOrder()
        {
            var id = HttpContext.User.FindFirstValue("UserId");
            var Cart = db.Orders.Where(i => i.CustomerId == id);
            return Ok(Cart);
        
        }

        [HttpGet("Products")]
        [Authorize(Roles = "Customer")]

        public async Task<IActionResult> ViewProducts()
        {

            var stock = await db.ProductSpecifications.Include(i => i.Products).Where(i => i.ItemQuantity > 0).ToListAsync();
            return Ok(stock);

        }

        [HttpGet("User")]
        [ProducesResponseType(typeof(RegisterRequestModel), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        [Authorize(Roles = "Customer")]
        public async Task<IActionResult> GetUser()
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var logedinuser = await userManager.FindByNameAsync(userName);
            var user = new RegisterRequestModel()
            {
                FirstName = logedinuser.FirstName,
                LastName = logedinuser.LastName,
                Email = logedinuser.Email,
                PhoneNumber= logedinuser.PhoneNumber,
            
            };
            return Ok(new ResponseModel<RegisterRequestModel>()
            {
                Data = user,
            });
        }
        //Updating User Details
        [HttpPut("Profile")]
        [ProducesResponseType(typeof(UpdateProfileModel), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        //[Authorize(Roles = "Customer")]
        public async Task<IActionResult> UpdateProfile(UpdateProfileModel model)
        {
            var userName = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await userManager.FindByNameAsync(userName);

            if (user == null)
                return NotFound();
            user.FirstName = model.firstName;
            user.LastName = model.lastName;
            user.PhoneNumber = model.phoneNumber;
            user.Email = model.email;
            await db.SaveChangesAsync();
            return Ok(user);
        }

        [HttpGet("{Category}")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(typeof(Nullable), StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(IEnumerable<Product>), StatusCodes.Status200OK)]
        public async Task<ActionResult<Product>> Search(string name)
        {
            if (db.Products == null)
            {
                return NoContent();
            }
            var product = await db.Products.Where(m => (m.ProductCategory.Contains(name))).ToListAsync();

            if (product == null)
            {
                return NotFound(new ResponseModel<string>()
                {
                    Success = false,
                    Message = "No such item is Found",
                });
            }
            return Ok(new ResponseModel<IEnumerable<Product>>()
            {
                Data = product,
            });
        }

    }
}
