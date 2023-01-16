using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace BootCart.Model
{
    public class ProductMaster
    {
        public int Id { get; set; }
        public ApplicationUser User { get; set; }
        [ForeignKey(nameof(User))]
        public string UserId { get; set; }

        public String BrandName { get; set; }

        public int YOP { get; set; }

        public String LicenseNumber { get; set; }

        public String Status { get; set; }

    }
}
