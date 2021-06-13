using Social.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Social.Application.SpecialDays.Models
{
   public class SpecialDaysPreviewDto
    {
        public int SpecialDayId { get; set; }
        public string Title { get; set; }
        public DateTime EventOn { get; set; }
        public string EventType { get; set; }
        public string Note { get; set; }
        public string ShortNote { get; set; }
        public string ImageLink { get; set; }
        public string PostLink { get; set; }

        public static Expression<Func<SpecialDay, SpecialDaysPreviewDto>> Projection
        {
            get
            {
                return e => new SpecialDaysPreviewDto
                {
                    Title=e.Title,
                    SpecialDayId = e.SpecialDayId,
                    ShortNote = e.ShortNote,
                    PostLink = e.PostLink,
                    Note = e.Note,    
                    ImageLink = e.ImageLink,
                    EventType = e.EventType,
                    EventOn = e.EventOn
                };
            }
        }

    }
}
