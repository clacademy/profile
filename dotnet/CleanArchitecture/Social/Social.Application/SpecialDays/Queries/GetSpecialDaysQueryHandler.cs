using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.SpecialDays.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.SpecialDays.Queries
{
    public class GetSpecialDaysQueryHandler : IRequestHandler<GetSpecialDaysQuery, List<SpecialDaysPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetSpecialDaysQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<SpecialDaysPreviewDto>> Handle(GetSpecialDaysQuery request, CancellationToken cancellationToken)
        {

            return _context.SpecialDays
                .Select(SpecialDaysPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
