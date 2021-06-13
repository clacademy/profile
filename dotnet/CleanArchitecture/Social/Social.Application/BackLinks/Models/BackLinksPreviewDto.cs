using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.BackLinks.Models
{
    public class BackLinksPreviewDto
    {
        public int BackLinkId { get; set; }
        public string Backlink { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public long PostCount { get; set; }
        public int Orders { get; set; }
        public string Area { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime UpdatedOn { get; set; }

        public static Expression<Func<BackLink, BackLinksPreviewDto>> Projection
        {
            get
            {
                return b => new BackLinksPreviewDto
                {
                    Area = b.Area,
                    Backlink = b.Backlink,
                    BackLinkId = b.BackLinkId,
                    Category = b.Category,
                    IsActive = b.IsActive,
                    Name = b.Name,
                    Orders = b.Orders,
                    PostCount = b.PostCount,
                    UpdatedOn = b.UpdatedOn
                };
            }
        }
    }
}
