using MediatR;
using Microsoft.EntityFrameworkCore;
using Social.Application.YouTubeChannels.Models;
using Social.Application.YouTubeVideoStatistics.Models;
using Social.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.YouTubeVideoStatistics.Queries
{
    public class YouTubeVideoStatisticsPreviewQueryHandler : IRequestHandler<YouTubeVideoStatisticsPreviewQuery, List<YouTubeVideoStatisticsPreviewDto>>
    {
        private readonly SocialDbContext _context;
        public YouTubeVideoStatisticsPreviewQueryHandler(SocialDbContext context)
        {
            _context = context;
        }
        public Task<List<YouTubeVideoStatisticsPreviewDto>> Handle(YouTubeVideoStatisticsPreviewQuery request, CancellationToken cancellationToken)
        {

            return _context.YouTubeVideoStatistics
                .Select(YouTubeVideoStatisticsPreviewDto.Projection)
                .ToListAsync(cancellationToken);
        }
    }
}
