using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.YouTubeVideos.Models;
using Social.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.YouTubeVideos.Queries
{
    public class GetYouTubeVideoPreviewQueryHandler : IRequestHandler<GetYouTubeVideoPreviewQuery, List<YouTubeVideosPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public GetYouTubeVideoPreviewQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<YouTubeVideosPreviewDto>> Handle(GetYouTubeVideoPreviewQuery request, CancellationToken cancellationToken)
        {

            return _context.YouTubeVideos
                .Include(v => v.YouTubeVideoStatistic)
                .Select(YouTubeVideosPreviewDto.Projection)
                .OrderBy(c=>c.Ranking)
                .ToListAsync(cancellationToken);
        }
    }
}
