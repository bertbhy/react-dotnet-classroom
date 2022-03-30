namespace classroom
{
    public class HelloContext : DbContext
    {
        public HelloContext(DbContextOptions<HelloContext> options)
            : base(options)
        {
        }

        public DbSet<Hello> Hellos { get; set; }

    }

    public class Hello
    {
        public int Id { get; set; }
        public string? Name { get; set; }
    }
}