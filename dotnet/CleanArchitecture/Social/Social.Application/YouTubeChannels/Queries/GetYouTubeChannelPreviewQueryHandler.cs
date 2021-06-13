using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.YouTubeChannels.Models;
using Social.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.YouTubeChannels.Queries
{
    public class GetYouTubeChannelPreviewQueryHandler : IRequestHandler<GetYouTubeChannelPreviewQuery, List<YouTubeChannelPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetYouTubeChannelPreviewQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<YouTubeChannelPreviewDto>> Handle(GetYouTubeChannelPreviewQuery request, CancellationToken cancellationToken)
        {

            return _context.YouTubeChannels
                .Select(YouTubeChannelPreviewDto.Projection)
                .ToListAsync(cancellationToken);
        }
    }
}
