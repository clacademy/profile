using Microsoft.AspNetCore.Mvc;
using Social.Application.Schedulers.Commands.CreateCommand;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Social.API.Controllers
{
    public class SchduleController : BaseController
    {
        [HttpPost]
        [ProducesResponseType((int)HttpStatusCode.NoContent)]
        public async Task<IActionResult> Create([FromBody] CreateSchduleCommand command)
        {
            var productId = await Mediator.Send(command);
            return NoContent();
        }
    }
}
