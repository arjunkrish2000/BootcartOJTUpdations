namespace BootCart.Model
{
    public class Cart
    {
        public int Id { get; set; }
        public ProductSpecification ProductSpecification { get; set; }
        [ForeignKey(nameof(ProductSpecification))]
        public int ProductId { get; set; }
        public ApplicationUser User { get; set; }
        [ForeignKey(nameof(User))]
        public String UserId { get; set; }

    }
}
