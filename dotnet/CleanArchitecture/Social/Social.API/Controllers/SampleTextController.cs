using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Social.Application.SampleTexts.Models;
using Social.Application.SampleTexts.Queries;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class SampleTextController : BaseController
    {
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<SampleTextsPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetSampleTextPreview([FromQuery] GetSampleTextsPreviewQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
    }
}
