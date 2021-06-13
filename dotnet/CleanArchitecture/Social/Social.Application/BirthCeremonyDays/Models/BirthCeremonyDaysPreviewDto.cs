using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.BirthCeremonyDays.Models
{
   public class BirthCeremonyDaysPreviewDto
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
        public string PostLink { get; set; }

        public static Expression<Func<BirthCeremonyDay, BirthCeremonyDaysPreviewDto>> Projection
        {
            get
            {
                return e => new BirthCeremonyDaysPreviewDto
                {
                    Name = e.Name,
                    BirthCeremonyDayId = e.BirthCeremonyDayId,
                    ShortNote = e.ShortNote,
                    PostLink = e.PostLink,
                    Note = e.Note,
                    ImageLink = e.ImageLink,
                    Category = e.Category,
                    EventOn = e.EventOn,
                    Place = e.Place,
                    Event=e.Event
                };
            }
        }
    }
}
