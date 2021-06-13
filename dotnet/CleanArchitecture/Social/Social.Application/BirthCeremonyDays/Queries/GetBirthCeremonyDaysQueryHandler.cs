using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.BirthCeremonyDays.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
namespace Social.Application.BirthCeremonyDays.Queries
{
    public class GetBirthCeremonyDaysQueryHandler : IRequestHandler<GetBirthCeremonyDaysQuery, List<BirthCeremonyDaysPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetBirthCeremonyDaysQueryHandler(SocialDbContext context)
        {

            _context = context;
        }
        public Task<List<BirthCeremonyDaysPreviewDto>> Handle(GetBirthCeremonyDaysQuery request, CancellationToken cancellationToken)
        {

            return _context.BirthCeremonyDays
                .Select(BirthCeremonyDaysPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
