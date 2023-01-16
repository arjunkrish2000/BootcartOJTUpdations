namespace BootCart.Model.RequestModels
{
    public class OrderModel
    {
 
        public string CustomerId { get; set; }

        public DateTime OrderedDate { get; set; } = DateTime.Now;

        public DateTime DeliveryDate { get; set; }

        public String Address { get; set; }

        public double TotalAmount { get; set; }

        public  String Status { get; set; }
    }
}
