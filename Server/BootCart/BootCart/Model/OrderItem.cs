namespace BootCart.Model
{
    public class OrderItem
    {

        public int Id { get; set; }

        public int ProductSpecificationId { get; set; }
        public ApplicationUser User { get; set; }
        [ForeignKey(nameof(User))]
        public String UserId { get; set; }

        public int Quantity { get; set; }

        public int IndividulaItemPrice { get; set; }

        public IEnumerable<Order> Orders { get; set; }

    }
}
