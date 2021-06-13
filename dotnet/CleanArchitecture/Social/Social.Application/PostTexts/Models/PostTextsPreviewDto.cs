using Social.Domain.Entities;
using System;
using System.Linq.Expressions;

namespace Social.Application.PostTexts.Models
{
   public class PostTextsPreviewDto
    {
        public int PostTextId { get; set; }
        public string Name { get; set; }
        public string TagLine { get; set; }
        public string PostType { get; set; }
        public string FullText { get; set; }
        public string FilePath { get; set; }      
        public int Rank { get; set; }
        public static Expression<Func<PostText, PostTextsPreviewDto>> Projection
        {
            get
            {
                return p => new PostTextsPreviewDto
                {
                    FilePath=p.FilePath,
                    FullText=p.FullText,
                    Name=p.Name,
                    PostTextId=p.PostTextId,
                    PostType=p.PostType,
                    Rank=p.Rank,
                    TagLine=p.TagLine
                };
            }
        }
    }
}
