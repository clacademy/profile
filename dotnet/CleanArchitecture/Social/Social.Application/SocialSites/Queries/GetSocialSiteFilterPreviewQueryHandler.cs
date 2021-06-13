using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.SocialSites.Models;
using Social.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.SocialSites.Queries
{
    public class GetSocialSiteFilterPreviewQueryHandler : IRequestHandler<GetSocialSiteFilterPreviewQuery, List<SocialSitesPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetSocialSiteFilterPreviewQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<SocialSitesPreviewDto>> Handle(GetSocialSiteFilterPreviewQuery request, CancellationToken cancellationToken)
        {

            return _context.SocialSites.Where(x=>x.IsAutoPostEnable==true)
                .Select(SocialSitesPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
