using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.Fairs.Models
{
    public class FairsPreviewDto
    {
        public int FairId { get; set; }
        public string Title { get; set; }
        public DateTime EventOn { get; set; }
        public string Location { get; set; }
        public int Duration { get; set; }
        public string Note { get; set; }
        public string ShortNote { get; set; }
        public string ImageLink { get; set; }
        public string PostLink { get; set; }
     

        public static Expression<Func<Fair, FairsPreviewDto>> Projection
        {
            get
            {
                return e => new FairsPreviewDto
                {
                    Title = e.Title,
                    FairId = e.FairId,
                    ShortNote = e.ShortNote,
                    PostLink = e.PostLink,
                    Note = e.Note,
                    ImageLink = e.ImageLink,
                    Duration = e.Duration,
                    EventOn = e.EventOn,
                    Location=e.Location
                };
            }
        }
    }
}
