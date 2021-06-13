using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Social.Application.AstronomyDays.Models;
using Social.Application.AstronomyDays.Queries;
using Social.Application.BirthCeremonyDays.Models;
using Social.Application.BirthCeremonyDays.Queries;
using Social.Application.CulturalDays.Models;
using Social.Application.CulturalDays.Queries;
using Social.Application.Fairs.Models;
using Social.Application.Fairs.Queries;
using Social.Application.SpecialDays.Models;
using Social.Application.SpecialDays.Queries;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class EventController : BaseController
    {
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<AstronomyDaysPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetAstronomyDays([FromQuery] GetAstronomyDaysQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<BirthCeremonyDaysPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetBirthCeremonyDays([FromQuery] GetBirthCeremonyDaysQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<CulturalDaysPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCulturalDays([FromQuery] GetCulturalDaysQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<FairsPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetFairs([FromQuery] GetFairsQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
        [HttpGet]
        [DisableCors]
        [ProducesResponseType(typeof(IEnumerable<SpecialDaysPreviewDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetSpecialDays([FromQuery] GetSpecialDaysQuery query)
        {
            return Ok(await Mediator.Send(query));
        }
    }
}
