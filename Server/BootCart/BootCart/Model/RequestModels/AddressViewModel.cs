namespace BootCart.Model.RequestModels
{
    public class AddressViewModel
    {
        public String Name { get; set; }
        public String HouseName { get; set; }

        public String PostOffice { get; set; }
        public int Pincode { get; set; }
        public String City { get; set; }

        public String District { get; set; }
        public String State { get; set; }
        public String LandMark { get; set; }

        public String AlternateMobileNumber { get; set; }

        public String Type { get; set; }
    }
}
