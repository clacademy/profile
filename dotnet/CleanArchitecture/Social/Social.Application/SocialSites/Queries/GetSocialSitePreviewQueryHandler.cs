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
    public class GetSocialSitePreviewQueryHandler : IRequestHandler<GetSocialSitePreviewQuery, List<SocialSitesPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetSocialSitePreviewQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<SocialSitesPreviewDto>> Handle(GetSocialSitePreviewQuery request, CancellationToken cancellationToken)
        {          

            return _context.SocialSites
                .Select(SocialSitesPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
