using Social.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Social.Application.SampleTexts.Models
{
    public class SampleTextsPreviewDto
    {
        public int SampleTextId { get; set; }
        public string SampleTextFull { get; set; }
        public string Category { get; set; }
        public int Priority { get; set; }
        public int Frequency { get; set; }

        public static Expression<Func<SampleText, SampleTextsPreviewDto>> Projection
        {
            get
            {
                return s => new SampleTextsPreviewDto
                {
                    SampleTextId = s.SampleTextId,
                    SampleTextFull = s.SampleTextFull,
                    Category = s.Category,
                    Priority = s.Priority,
                    Frequency = s.Frequency
                };
            }
        }
    }
}
