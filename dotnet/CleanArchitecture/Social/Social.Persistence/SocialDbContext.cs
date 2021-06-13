using Microsoft.EntityFrameworkCore;
using Social.Domain.Entities;
using Social.Persistence.Extensions;

namespace Social.Persistence
{
    public class SocialDbContext : DbContext
    {
        public SocialDbContext(DbContextOptions<SocialDbContext> options)
            : base(options)
        {
        }
        public DbSet<SocialSite> SocialSites { get; set; }
        public DbSet<YouTubeChannel> YouTubeChannels { get; set; }
        public DbSet<YouTubeVideo> YouTubeVideos { get; set; }
        public DbSet<YouTubeVideoStatistic> YouTubeVideoStatistics { get; set; }
        public DbSet<SampleText> SampleTexts { get; set; }
        public DbSet<Scheduler> Schedulers { get; set; }
        public DbSet<SpecialDay> SpecialDays { get; set; }
        public DbSet<Fair> Fairs { get; set; }
        public DbSet<CulturalDay> CulturalDays { get; set; }
        public DbSet<BirthCeremonyDay> BirthCeremonyDays { get; set; }
        public DbSet<AstronomyDay> AstronomyDays { get; set; }
        public DbSet<ImagePublished> ImagePublisheds { get; set; }
        public DbSet<BackLink> BackLinks { get; set; }
        public DbSet<PostText> PostTexts { get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyAllConfigurations();
        }
    }
}
