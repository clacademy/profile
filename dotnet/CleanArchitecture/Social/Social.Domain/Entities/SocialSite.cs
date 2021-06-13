using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
    public class SocialSite
    {
        public SocialSite()
        {

        }
        public int SocialSiteId { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string Category { get; set; }
        public bool IsActive { get; set; }
        public bool IsAutoPostEnable { get; set; }

}
}
