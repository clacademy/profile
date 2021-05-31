namespace SampleApplication.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Services.Utility;
    using System;


    [Authorize]
    [Route("api/[controller]")]
    public abstract class BaseController : Controller
    {
        protected IActionResult ProcessResult(Result result)
        {
            switch (result.Status)
            {
                case StatusType.None:
                    throw new ArgumentOutOfRangeException(nameof(result.Status), "Invalid result type.");
                case StatusType.Ok:
                    return this.Ok(result.Entity);

                case StatusType.Failed:
                    return this.BadRequest(result.Message);

                case StatusType.NotFound:
                    return this.NotFound();

                case StatusType.Unauthorized:
                    return this.Unauthorized();

                default:
                    throw new ArgumentOutOfRangeException(nameof(result.Status), "No case exists for the specified result type.");
            }
        }
    }
}
