using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
   public class BackLink
    {
        public int BackLinkId { get; set; }
        public string Backlink { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public long PostCount { get; set; }
        public int Orders { get; set; }
        public string Area { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime UpdatedOn { get; set; }

    }
}
