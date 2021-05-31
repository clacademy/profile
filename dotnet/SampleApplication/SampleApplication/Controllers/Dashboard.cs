namespace SampleApplication.Controllers
{
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Models.DTO;
    using Services.Interfaces;

    public class Dashboard : BaseController
    {
        public Dashboard(IDashboardService service)
        {
            this.Service = service;
        }
        private IDashboardService Service { get; }


        [HttpGet("getDashBoards")]
        public async Task<IActionResult> GetDashBoards()
        {
            var volunteer = new VolunteerDto();
            var response = await this.Service.GetDashBoardsAsync(volunteer);
            if (response != null)
            {
                // no statuses
                return new NoContentResult();
            }
            return new OkObjectResult(response);
        }
    }
}
