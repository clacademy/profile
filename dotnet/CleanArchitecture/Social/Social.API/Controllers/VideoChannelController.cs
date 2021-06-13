using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Social.Application.YouTubeChannels.Models;
using Social.Application.YouTubeChannels.Queries;
using Social.Application.YouTubeVideos.Models;
using Social.Application.YouTubeVideos.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class VideoChannelController : BaseController
    {
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<YouTubeChannelPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetYouTubeChannelPreview([FromQuery] GetYouTubeChannelPreviewQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<YouTubeVideosPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetYouTubeVideoPreview([FromQuery] GetYouTubeVideoPreviewQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
    }
}
