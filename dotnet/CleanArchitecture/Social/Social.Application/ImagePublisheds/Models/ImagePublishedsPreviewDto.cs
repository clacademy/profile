using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.ImagePublisheds.Models
{
    public class ImagePublishedsPreviewDto
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

        public static Expression<Func<ImagePublished, ImagePublishedsPreviewDto>> Projection
        {
            get
            {
                return e => new ImagePublishedsPreviewDto
                {
                    Caption = e.Caption,
                    CreatedOn = e.CreatedOn,
                    Descripsion = e.Descripsion,
                    PostLink = e.PostLink,
                    ImagePublishedId = e.ImagePublishedId,
                    IsActive = e.IsActive,
                    Name = e.Name,
                    PublishImageId=e.PublishImageId,
                    PublishPathLocal=e.PublishPathLocal,
                    Tags=e.Tags,
                    UpdatedOn=e.UpdatedOn
                };
            }
        }
    }
}
