using Microsoft.EntityFrameworkCore;
using Social.Persistence.Infrastructure;

namespace Social.Persistence
{
    public class SocialDbContextFactory : DesignTimeDbContextFactoryBase<SocialDbContext>
    {
        protected override SocialDbContext CreateNewInstance(DbContextOptions<SocialDbContext> options)
        {
            return new SocialDbContext(options);
        }
    }
}
