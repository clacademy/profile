using System;
using Social.Domain.Entities;
using System.Linq.Expressions;


namespace Social.Application.YouTubeVideoStatistics.Models
{
    public class YouTubeVideoStatisticsPreviewDto
    {
        public string VideoId { get; set; }
        public long ViewCount { get; set; }
        public long LikeCount { get; set; }
        public long DislikeCount { get; set; }
        public TimeSpan Duration { get; set; }
        public long FavoriteCount { get; set; }
        public long CommentCount { get; set; }

        public static Expression<Func<YouTubeVideoStatistic, YouTubeVideoStatisticsPreviewDto>> Projection
        {
            get
            {
                return y => new YouTubeVideoStatisticsPreviewDto
                {
                    CommentCount = y.CommentCount,
                    Duration = y.Duration,
                    FavoriteCount = y.FavoriteCount,
                    LikeCount = y.LikeCount,
                    DislikeCount = y.DislikeCount,
                    VideoId = y.VideoId,
                    ViewCount = y.ViewCount
                };
            }
        }
    }
}
