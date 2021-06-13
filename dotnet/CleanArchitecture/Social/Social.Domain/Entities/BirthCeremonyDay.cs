using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
    public class BirthCeremonyDay
    {
        public int BirthCeremonyDayId { get; set; }
        public string Name { get; set; }
        public DateTime EventOn { get; set; }
        public string Place { get; set; }
        public string Event { get; set; }
        public string Category { get; set; }
        public string Note { get; set; }
        public string ShortNote { get; set; }
        public string ImageLink { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string PostLink { get; set; }
        public Boolean IsActive { get; set; }

    }
}
