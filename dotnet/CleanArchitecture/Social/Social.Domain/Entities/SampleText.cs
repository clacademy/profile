using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Domain.Entities
{
    public class SampleText
    {
        public SampleText()
        {

        }
        public int SampleTextId { get; set; }
        public string SampleTextFull { get; set; }
        public string Category { get; set; }
        public int Priority { get; set; }
        public int Frequency { get; set; }

    }
}
