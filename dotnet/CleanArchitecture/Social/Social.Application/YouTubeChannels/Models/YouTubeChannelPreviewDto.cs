using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.YouTubeChannels.Models
{
    public class YouTubeChannelPreviewDto
    {
        public int YouTubeChannelId { get; set; }
        public string Title { get; set; }
        public long SubscriberCount { get; set; }
        public string ChannelId { get; set; }
        public int? VideoCount { get; set; }
        public long ViewCount { get; set; }
        public DateTime? LastUpdatedOn { get; set; }

        public static Expression<Func<YouTubeChannel, YouTubeChannelPreviewDto>> Projection
        {
            get
            {
                return y => new YouTubeChannelPreviewDto
                {
                    YouTubeChannelId = y.YouTubeChannelId,
                    SubscriberCount = y.SubscriberCount,
                    ChannelId = y.ChannelId,
                    VideoCount = y.VideoCount,
                    Title = y.Title,
                    ViewCount = y.ViewCount,
                    LastUpdatedOn = y.LastUpdatedOn    
                };
            }
        }
    }
}
