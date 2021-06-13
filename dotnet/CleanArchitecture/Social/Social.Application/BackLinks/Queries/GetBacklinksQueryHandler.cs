using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.BackLinks.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.BackLinks.Queries
{
    public class GetBacklinksQueryHandler : IRequestHandler<GetBacklinksQuery, List<BackLinksPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetBacklinksQueryHandler(SocialDbContext context)
        {

            _context = context;
        }
        public Task<List<BackLinksPreviewDto>> Handle(GetBacklinksQuery request, CancellationToken cancellationToken)
        {

            return _context.BackLinks
                .Select(BackLinksPreviewDto.Projection)
                .ToListAsync(cancellationToken);
        }
    }
}

