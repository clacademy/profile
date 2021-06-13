using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.SocialSites.Models
{
    public class SocialSitesPreviewDto
    {
        public SocialSitesPreviewDto()
        {

        }
        public int SocialSiteId { get; set; }

        public string Name { get; set; }

        public string Link { get; set; }
        public string Category { get; set; }

        public static Expression<Func<SocialSite, SocialSitesPreviewDto>> Projection
        {
            get
            {
                return s => new SocialSitesPreviewDto
                {
                    SocialSiteId = s.SocialSiteId,
                    Name = s.Name,
                    Link = s.Link,
                    Category=s.Category
                };
            }
        }
    }
}
