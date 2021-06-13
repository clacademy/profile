using Social.Application.PostTexts.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;


namespace Social.Application.PostTexts.Queries
{
    class GetPostTextsQueryHandler : IRequestHandler<GetPostTextsQuery, List<PostTextsPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetPostTextsQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<PostTextsPreviewDto>> Handle(GetPostTextsQuery request, CancellationToken cancellationToken)
        {

            return _context.PostTexts
                .Select(PostTextsPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }

 
}
