using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Social.Application.SocialSites.Models;
using Social.Application.SocialSites.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class SocialSiteController : BaseController
    {
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<SocialSitesPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetSocialSitePreview([FromQuery] GetSocialSitePreviewQuery query)
        {
            return Ok(await Mediator.Send(query));
        }

        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<SocialSitesPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetSocialSiteFilterPreview([FromQuery] GetSocialSiteFilterPreviewQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
    }
}
