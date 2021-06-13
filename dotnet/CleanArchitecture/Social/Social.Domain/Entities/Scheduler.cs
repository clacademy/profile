using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
    public class Scheduler
    {
        public Scheduler()
        {

        }
        public int SchedulerId { get; set; }
        public int SampleTextId { get; set; }
        public DateTimeOffset SchedulerDate { get; set; }
        public TimeSpan SchedulerTime { get; set; }
        public string SchedulerText { get; set; }
        public string Category { get; set; }
        public int SocialSiteId { get; set; }
        public int FromPostId { get; set; }
        public string PostReference { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public Boolean IsPosted { get; set; }
    }
}
