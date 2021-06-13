using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
   public class ImagePublished
    {
        public int ImagePublishedId { get; set; }
        public int PublishImageId { get; set; }
        public string Caption { get; set; }
        public string Descripsion { get; set; }
        public string Tags { get; set; }
        public string Name { get; set; }
        public string PublishPathLocal { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string PostLink { get; set; }
        public Boolean IsActive { get; set; }


    }
}
