using Social.Application.YouTubeVideoStatistics.Models;
using Social.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace Social.Application.YouTubeVideos.Models
{
    public class YouTubeVideosPreviewDto
    {
        public YouTubeVideosPreviewDto()
        {
            // YouTubeVideoStatistics = new List<YouTubeVideoStatisticsPreviewDto>();
        }
        public int YouTubeVideoId { get; set; }
        public string Title { get; set; }
        public string Descripsion { get; set; }
        public string Link { get; set; }
        public DateTime? UploadTime { get; set; }
        public string VideoId { get; set; }
        public string Thumbnail { get; set; }
        public DateTime? LastUpdatedOn { get; set; }

        // public ICollection<YouTubeVideoStatisticsPreviewDto> YouTubeVideoStatistics { get; set; }

        public long ViewCount { get; set; }
        public long LikeCount { get; set; }
        public long DislikeCount { get; set; }
        public TimeSpan Duration { get; set; }
        public long FavoriteCount { get; set; }
        public long CommentCount { get; set; }
        public decimal Ranking { get; set; }

        public static Expression<Func<YouTubeVideo, YouTubeVideosPreviewDto>> Projection
        {
            get
            {
                return y => new YouTubeVideosPreviewDto
                {
                    Descripsion = y.Descripsion,
                    LastUpdatedOn = y.LastUpdatedOn,
                    Link = string.Format("https://youtu.be/{0}", y.Link),
                    Thumbnail = y.Thumbnail,
                    Title = y.Title,
                    UploadTime = y.UploadTime,
                    VideoId = y.VideoId,
                    YouTubeVideoId = y.YouTubeVideoId,
                    ViewCount = y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().ViewCount,
                    LikeCount = y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().LikeCount,
                    DislikeCount = y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().DislikeCount,
                    Duration = y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().Duration,
                    FavoriteCount = y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().FavoriteCount,
                    CommentCount = y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().CommentCount,

                    Ranking = ((y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().ViewCount +
                              y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().LikeCount +
                              y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().FavoriteCount +
                              y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().CommentCount) -
                              y.YouTubeVideoStatistic.AsQueryable().Select(YouTubeVideoStatisticsPreviewDto.Projection).SingleOrDefault().DislikeCount) /
                              (int)DateTime.Now.Subtract(Convert.ToDateTime(y.UploadTime)).TotalDays

                };
            }
        }
    }
}
