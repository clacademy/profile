using System;
using System.Collections.Generic;

namespace Social.Domain.Entities
{
    public class YouTubeVideo
    {
        public YouTubeVideo()
        {
            YouTubeVideoStatistic = new HashSet<YouTubeVideoStatistic>();
        }
        public int YouTubeVideoId { get; set; }
        public string Title { get; set; }
        public string Descripsion { get; set; }
        public string Link { get; set; }
        public DateTime? UploadTime { get; set; }
        public string VideoId { get; set; }
        public int YouTubeChannelId { get; set; }
        public string Thumbnail { get; set; }
        public string PlaylistId { get; set; }
        public DateTime? LastUpdatedOn { get; set; }

        public ICollection<YouTubeVideoStatistic>YouTubeVideoStatistic { get; set; }
    }
}
