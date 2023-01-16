using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BootCart.Model
{
  
    public class ApplicationUser:IdentityUser
    {
        [StringLength(15)]
        public String FirstName { get; set; }

        [StringLength(15)]
        public String LastName { get; set; }
        public String Gender { get; set; }
        public DateTime DateOfBirth { get; set; }

        //public IEnumerable<CustomerDetail> CustomerDetails{ get; set; }
        
    }
}
