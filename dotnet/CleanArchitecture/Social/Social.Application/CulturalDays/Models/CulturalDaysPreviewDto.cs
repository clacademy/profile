using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.CulturalDays.Models
{
   public class CulturalDaysPreviewDto
    {
        public int CulturalDayId { get; set; }
        public string Title { get; set; }
        public DateTime EventOn { get; set; }
        public string Location { get; set; }
        public string MajorReligion { get; set; }
        public string Note { get; set; }
        public string ShortNote { get; set; }
        public string ImageLink { get; set; }
        public string PostLink { get; set; }

        public static Expression<Func<CulturalDay, CulturalDaysPreviewDto>> Projection
        {
            get
            {
                return e => new CulturalDaysPreviewDto
                {
                    Title = e.Title,
                    CulturalDayId = e.CulturalDayId,
                    ShortNote = e.ShortNote,
                    PostLink = e.PostLink,
                    Note = e.Note,
                    ImageLink = e.ImageLink,
                    MajorReligion = e.MajorReligion,
                    EventOn = e.EventOn,
                    Location = e.Location
                };
            }
        }
    }
}
