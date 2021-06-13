using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.ImagePublisheds.Models;
using Social.Persistence;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.ImagePublisheds.Queries
{
    public class GetImagePublishedsQueryHandler : IRequestHandler<GetImagePublishedsQuery, List<ImagePublishedsPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetImagePublishedsQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<ImagePublishedsPreviewDto>> Handle(GetImagePublishedsQuery request, CancellationToken cancellationToken)
        {
            return _context.ImagePublisheds
                .Select(ImagePublishedsPreviewDto.Projection)
               .ToListAsync(cancellationToken);
        }
    }
}
