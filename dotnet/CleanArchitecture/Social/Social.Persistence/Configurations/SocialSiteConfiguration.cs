using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Social.Domain.Entities;

namespace Social.Persistence.Configurations
{
    public class SocialSiteConfiguration : IEntityTypeConfiguration<SocialSite>
    {
        public void Configure(EntityTypeBuilder<SocialSite> builder)
        {

            builder.Property(e => e.SocialSiteId).HasColumnName("SocialSiteID");

            builder.Property(e => e.Name)
                .IsRequired()
                .HasMaxLength(150);

            builder.Property(e => e.Link)
                        .HasMaxLength(500);


            builder.Property(e => e.IsActive)
                        .IsRequired()
                        .HasDefaultValueSql("((1))");
        }
    }
}
