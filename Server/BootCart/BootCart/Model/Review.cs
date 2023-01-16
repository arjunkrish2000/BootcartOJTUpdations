using System.ComponentModel.DataAnnotations.Schema;

namespace BootCart.Model
{
    public class Review
    {
        public int Id { get; set; }
        public Product Product { get; set; }
        [ForeignKey(nameof(Product))]
        public int ProductId { get; set; }
        public ApplicationUser User { get; set; }
        [ForeignKey(nameof(User))]
        public string UserId { get; set; }
        public int Ratings { get; set; }
        [StringLength(250)]
        public String Reviews { get; set; }

    }
}
