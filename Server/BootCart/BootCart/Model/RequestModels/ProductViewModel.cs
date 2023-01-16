namespace BootCart.Model.RequestModels
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string ProductType { get; set; }
        public string ProductCategory { get; set; }
        public int Quantity { get; set; }
        public float Price { get; set; }
        public string ProductImage { get; set; }


    }
}
