using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
    public class YouTubeChannel
    {
        public YouTubeChannel()
        {

        }
        public int YouTubeChannelId { get; set; }
        public string Title { get; set; }
        public long SubscriberCount { get; set; }
        public string ChannelId { get; set; }
        public int? VideoCount { get; set; }
        public long ViewCount { get; set; }
        public DateTime? LastUpdatedOn { get; set; }
    }
}
