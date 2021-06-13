using MediatR;
using Social.Application.YouTubeVideoStatistics.Models;
using System.Collections.Generic;

namespace Social.Application.YouTubeVideoStatistics.Queries
{
    public class YouTubeVideoStatisticsPreviewQuery : IRequest<List<YouTubeVideoStatisticsPreviewDto>>
    {
    }
}
