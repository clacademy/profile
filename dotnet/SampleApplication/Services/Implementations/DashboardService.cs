using System;

namespace Services.Implementations
{
    using Microsoft.Extensions.Logging;
    using Microsoft.Extensions.Options;
    using Models.Configuration;
    using Models.Contexts.Interfaces;
    using Models.DTO;
    using Models.Enums;
    using Services.Interfaces;
    using System.Linq;
    using System.Net.Http;
    using System.Threading.Tasks;

    public class DashboardService : IDashboardService
    {
        public DashboardService(HttpClient client, IOptions<APIConfig> config, ILogger<DashboardService> logger, IDashBoardContext context)
        {
            this.Config = config.Value;
            this.Logger = logger;
            this.Db = context;

            this.Client = client;
            this.Client.BaseAddress = new Uri(this.Config.BaseUri);
        }
        private HttpClient Client { get; }

        private APIConfig Config { get; }

        private IDashBoardContext Db { get; }

        private ILogger<DashboardService> Logger { get; }

        /// <summary>
        /// Fetches dashboard data.
        /// </summary>
        /// <returns></returns>
        public async Task<ResultType> GetDashBoardsAsync(VolunteerDto volunteer)
        {
            try
            {
                if (!volunteer.Active)
                {
                    // no agent
                    return ResultType.Failure;
                }

               

                var client = await this.Db.GetDashBoardsAsync();
                if (client.Any())
                {
                    // no client or session
                    return ResultType.Failure;
                }

                var response = await this.Client.GetAsync(
                    $"configuration/agents/{volunteer.VolunteerId}");

                response.EnsureSuccessStatusCode();

                return ResultType.Success;
            }
            catch (HttpRequestException ex)
            {
                this.Logger.LogError(ex, $"Failed to activate {volunteer.Id}.");
                return ResultType.Failure;
            }
        }


    }
}
