using System.ComponentModel.DataAnnotations.Schema;

namespace BootCart.Model
{
    public class Payment
    {
        public int Id { get; set; }
        public Order order { get; set; }
        [ForeignKey(nameof(order))]
        public int OrderId { get; set; }
        public float Amount { get; set; }
    
    }
}
