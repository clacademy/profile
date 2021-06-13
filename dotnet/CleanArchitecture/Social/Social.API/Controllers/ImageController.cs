using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Social.Application.ImagePublisheds.Models;
using Social.Application.ImagePublisheds.Queries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class ImageController : BaseController
    {
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<ImagePublishedsPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetImagePublisheds([FromQuery] GetImagePublishedsQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
    }
}
