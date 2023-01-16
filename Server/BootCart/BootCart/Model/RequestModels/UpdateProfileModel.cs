namespace BootCart.Model.RequestModels
{
    public class UpdateProfileModel
    {
        [Required]
        [StringLength(15)]
        public String firstName { get; set; }

        [Required]
        [StringLength(15)]
        public String lastName { get; set; }


        [EmailAddress]
        [StringLength(45)]
        public String email { get; set; }

        public String phoneNumber { get; set; }
    }
}
