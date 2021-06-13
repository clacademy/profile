using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.AstronomyDays.Models
{
    public class AstronomyDaysPreviewDto
    {
        public int AstronomyDayId { get; set; }
        public string Title { get; set; }
        public DateTime EventOn { get; set; }
        public string Note { get; set; }
        public string ShortNote { get; set; }
        public string ImageLink { get; set; }
        public string PostLink { get; set; }

        public static Expression<Func<AstronomyDay, AstronomyDaysPreviewDto>> Projection
        {
            get
            {
                return e => new AstronomyDaysPreviewDto
                {
                    Title = e.Title,
                    AstronomyDayId = e.AstronomyDayId,
                    ShortNote = e.ShortNote,
                    PostLink = e.PostLink,
                    Note = e.Note,
                    ImageLink = e.ImageLink,
                    EventOn = e.EventOn
                };
            }
        }
    }
}
