using airQualityAppApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace airQualityAppApi.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<AppUser> Users { get; set; }
    }
}