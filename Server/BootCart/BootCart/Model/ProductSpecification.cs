using System.ComponentModel.DataAnnotations.Schema;

namespace BootCart.Model
{
    public class ProductSpecification
    {
        public int Id { get; set; }

        public string Color { get; set; }
        public string Size { get; set; }
        public string Material { get; set; }

        public int ItemQuantity { get; set; }
        public Product Products { get; set; }
        [ForeignKey(nameof(Products))]
        public int ProductId { get; set; }

        public ApplicationUser User { get; set; }
        [ForeignKey(nameof(User))]
        public String UserId { get; set; }


    }
}
