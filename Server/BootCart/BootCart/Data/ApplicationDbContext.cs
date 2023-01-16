using BootCart.Model;

namespace BootCart.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
          : base(options)
        {

        }
      
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<OrderItem>()
                .HasKey(nameof(OrderItem.Id), nameof(OrderItem.ProductSpecificationId));

            modelBuilder.Entity<Order>()
                .HasOne(x => x.OrderItem)
                .WithMany(c => c.Orders)
                .HasForeignKey(p => new { p.OrderItemId, p.ProductId });
        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<ProductMaster> ProductMasters { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductSpecification> ProductSpecifications { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Cart> Carts { get; set; }

    }
}
