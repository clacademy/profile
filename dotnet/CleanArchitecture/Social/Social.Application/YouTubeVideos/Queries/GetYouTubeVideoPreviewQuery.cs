using MediatR;
using Social.Application.YouTubeVideos.Models;
using System.Collections.Generic;


namespace Social.Application.YouTubeVideos.Queries
{
    public class GetYouTubeVideoPreviewQuery : IRequest<List<YouTubeVideosPreviewDto>>
    {
        public int YouTubeVideoId { get; set; }
    }
}
