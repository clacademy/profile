using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
    public class YouTubeVideoStatistic
    {
        public int YouTubeVideoStatisticId { get; set; }
        public string VideoId { get; set; }
        public long ViewCount { get; set; }
        public long LikeCount { get; set; }
        public long DislikeCount { get; set; }
        public TimeSpan Duration { get; set; }
        public long FavoriteCount { get; set; }
        public long CommentCount { get; set; }
        public int YouTubeVideoId { get; set; }
    }
}
