using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
   public class SpecialDay
    {
        public int SpecialDayId { get; set; }
        public string Title { get; set; }
        public DateTime EventOn { get; set; }
        public string EventType { get; set; }
        public string Note { get; set; }
        public string ShortNote { get; set; }
        public string ImageLink { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string PostLink { get; set; }
        public Boolean IsActive { get; set; }

    }
}
