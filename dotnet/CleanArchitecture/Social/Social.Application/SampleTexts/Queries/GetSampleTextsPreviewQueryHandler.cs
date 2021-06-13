using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.SampleTexts.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.SampleTexts.Queries
{
    public class GetSampleTextsPreviewQueryHandler : IRequestHandler<GetSampleTextsPreviewQuery, List<SampleTextsPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetSampleTextsPreviewQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<SampleTextsPreviewDto>> Handle(GetSampleTextsPreviewQuery request, CancellationToken cancellationToken)
        {

            return _context.SampleTexts
                .Select(SampleTextsPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
