namespace BootCart.Model
{
    public class CustomerDetail
    {
        public int Id { get; set; }
        [StringLength(40)]
        public string? AlternateEmail { get; set; }
        public ApplicationUser User { get; set; }
        [ForeignKey(nameof(User))]
        public string UserId { get; set; }

    }

  
}
