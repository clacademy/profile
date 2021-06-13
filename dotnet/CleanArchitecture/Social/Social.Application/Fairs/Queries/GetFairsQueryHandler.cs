using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.Fairs.Models;

namespace Social.Application.Fairs.Queries
{
    public class GetFairsQueryHandler : IRequestHandler<GetFairsQuery, List<FairsPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetFairsQueryHandler(SocialDbContext context)
        {

            _context = context;
        }
        public Task<List<FairsPreviewDto>> Handle(GetFairsQuery request, CancellationToken cancellationToken)
        {

            return _context.Fairs
                .Select(FairsPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
