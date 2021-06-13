using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.CulturalDays.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.CulturalDays.Queries
{
    public class GetCulturalDaysQueryHandler : IRequestHandler<GetCulturalDaysQuery, List<CulturalDaysPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetCulturalDaysQueryHandler(SocialDbContext context)
        {

            _context = context;
        }
        public Task<List<CulturalDaysPreviewDto>> Handle(GetCulturalDaysQuery request, CancellationToken cancellationToken)
        {

            return _context.CulturalDays
                .Select(CulturalDaysPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
