using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
   public class PostText
    {
        public int PostTextId { get; set; }
        public string Name { get; set; }
        public string TagLine { get; set; }
        public string PostType { get; set; }
        public string FullText { get; set; }
        public string FilePath { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime UpdatedOn { get; set; }
        public DateTime CreatedOn { get; set; }
        public int Rank { get; set; }


    }
}
