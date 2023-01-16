using System.Collections;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using BootCart.Model.RequestModels;
using BootCart.Model.ResponseModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace BootCart.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly ApplicationDbContext db;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration configuration;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly SignInManager<ApplicationUser> signinManager;

        public AccountsController(
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager, IConfiguration configuration,
            RoleManager<IdentityRole> roleManager,
            SignInManager<ApplicationUser> signinManager)

        {
            this.db = context;
            this.userManager = userManager;
            this.configuration = configuration;
            this.roleManager = roleManager;
            this.signinManager = signinManager;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return BadRequest();
            }

            var result = await signinManager.CheckPasswordSignInAsync(user, model.Password, true);
            if (!result.Succeeded)
            {
                return BadRequest(new ResponseModel<string>
                {
                    Success = false,
                    Message = "Invalid email / password."
                });
            }

            var token = await GenerateToken(user);

            return Ok(new ResponseModel<string>
            {
                Data = token,
                Message = "Login Successful",
            });
        }



        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody]RegisterRequestModel model)
        {
            var user = new ApplicationUser()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Gender = model.Gender,
                PhoneNumber = model.PhoneNumber,
                DateOfBirth = model.DateOfBirth,
                UserName = Guid.NewGuid().ToString().Replace("-", "")
            };

            var res = await userManager.CreateAsync(user, model.Password);
            //if (!res.Succeeded)
            //    return BadRequest(res);
            if (res.Succeeded)
            {
                await userManager.AddToRoleAsync(user, "Customer");
                return Ok();
            }

            return Ok(user);
           // return Ok(model);
        }

        private async Task<string> GenerateToken(ApplicationUser user)
        {
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
            var issuer = configuration["Jwt:Issuer"];
            var audience = configuration["Jwt:Audience"];

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var userRoles = await userManager.GetRolesAsync(user);
            var role = userRoles.FirstOrDefault();
            var claims = new Claim[]
            {
                new(ClaimTypes.NameIdentifier, user.UserName),
                new(ClaimTypes.Role, role),
                new("Email", user.Email),
                new("UserId", user.Id),
                new(ClaimTypes.Name, $"{user.FirstName} {user.LastName}"),
                new("Role", role)
            };

            var token = new JwtSecurityToken(
                        issuer,
                        audience,
                        claims,
                        expires: DateTime.UtcNow.AddDays(7),
                        signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpGet ]
        public async Task<IActionResult> GenerateData()
        {
            await roleManager.CreateAsync(new IdentityRole() { Name = "Admin" });
            await roleManager.CreateAsync(new IdentityRole() { Name = "Customer" });
            await roleManager.CreateAsync(new IdentityRole() { Name = "ProductMaster" });

            var users = await userManager.GetUsersInRoleAsync("Admin");
            if (users.Count == 0)
            {
                var appUser = new ApplicationUser()
                {
                    FirstName = "Admin",
                    LastName = "User",
                    Email = "admin@admin.com",
                    UserName = "admin",
                };
                var res = await userManager.CreateAsync(appUser, "Pass@123");
                await userManager.AddToRoleAsync(appUser, "Admin");
            }
            return Ok("Data generated");
        }
        [HttpPost("ProductMaster")]
        public async Task<IActionResult> RegisterProductMaster(ProductMasterRegisterModel model)
        {
            var user = new ApplicationUser()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Gender = model.Gender,
                DateOfBirth = model.DateOfBirth,
                UserName = Guid.NewGuid().ToString().Replace("-", "")
            };
            var role = "ProductMaster";
            var res = await userManager.CreateAsync(user, model.Password);
            if (!res.Succeeded)
                return BadRequest(res);



            db.ProductMasters.Add(new ProductMaster()
            {
                UserId = user.Id,
                BrandName = model.BrandName,
                YOP=model.YOP,
                LicenseNumber = model.LicenseNumber,
                Status = "Verified"
            });



            await userManager.AddToRoleAsync(user, role);
            return Ok(user);
            return Ok(model);
        }
        
    }
}
