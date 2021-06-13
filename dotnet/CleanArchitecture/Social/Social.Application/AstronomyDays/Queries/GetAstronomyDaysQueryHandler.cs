using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.AstronomyDays.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.AstronomyDays.Queries
{
    public class GetAstronomyDaysQueryHandler : IRequestHandler<GetAstronomyDaysQuery, List<AstronomyDaysPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetAstronomyDaysQueryHandler(SocialDbContext context)
        {

            _context = context;
        }
        public Task<List<AstronomyDaysPreviewDto>> Handle(GetAstronomyDaysQuery request, CancellationToken cancellationToken)
        {

            return _context.AstronomyDays
                .Select(AstronomyDaysPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
