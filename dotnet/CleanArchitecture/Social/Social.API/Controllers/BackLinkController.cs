using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Social.Application.BackLinks.Models;
using Social.Application.BackLinks.Queries;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class BackLinkController : BaseController
    {
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<BackLinksPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetBacklinks([FromQuery] GetBacklinksQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
    }
}
