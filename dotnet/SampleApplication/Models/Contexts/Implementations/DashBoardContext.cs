namespace Models.Contexts.Implementations
{
    using Dapper;
    using Microsoft.Extensions.Logging;
    using Microsoft.Extensions.Options;
    using Models.Configuration;
    using Models.Contexts.Interfaces;
    using Models.DTO;
    using Models.Enums;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Threading.Tasks;

    public class DashBoardContext : DbContext, IDashBoardContext
    {
        public DashBoardContext(IOptions<DbConfig> config, ILogger<DashBoardContext> logger) : base(config)
        {
            this.Logger = logger;
        }

        private ILogger<DashBoardContext> Logger { get; }

        /// <summary>
        /// Fetches DashBoard ID for the specified DashBoard client.
        /// </summary>
        /// <param name="dashBoardId"></param>
        /// <returns></returns>
        public async Task<DashBoardDto> GetDashBoardAsync(int dashBoardId)
        {
            using var connection = new SqlConnection(this.Config.ConnectionString)
            {
                AccessToken = this.GetAccessTokenAsync()
            };

            return await connection.QuerySingleOrDefaultAsync<DashBoardDto>(
                @"
                    select
                         Id
                        ,Name                        
                    from dbo.DashBoard
                    where DashBoardId = @DashBoardId",
                new { DashBoardId = dashBoardId });
        }

        /// <summary>
        /// Fetches DashBoard from the DB.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<DashBoardDto>> GetDashBoardsAsync()
        {
            try
            {
                using var connection = new SqlConnection(this.Config.ConnectionString)
                {
                    AccessToken = this.GetAccessTokenAsync()
                };

                return await connection.QueryAsync<DashBoardDto>(
                    @"
                    select
                         Id
                        ,Name                        
                    from dbo.DashBoard");
            }
            catch (SqlException)
            {
                return Enumerable.Empty<DashBoardDto>();
            }
        }

        /// <summary>
        /// Saves DashBoard.
        /// </summary>
        /// <param name="result"></param>
        /// <returns></returns>
        public async Task<ResultType> SaveDashBoardAsync(DashBoardDto result)
        {
            try
            {
                using var connection = new SqlConnection(this.Config.ConnectionString)
                {
                    AccessToken = this.GetAccessTokenAsync()
                };

                await connection.ExecuteAsync(
                    "dbo.DashBoard",
                    new { result.Name },
                    commandType: CommandType.StoredProcedure);

                return ResultType.Success;
            }
            catch (SqlException ex)
            {
                this.Logger.LogError(ex, $"Failed to save.");
                return ResultType.Failure;
            }
        }

        /// <summary>
        /// Updates DashBoard.
        /// </summary>
        /// <param name="updates"></param>
        /// <returns></returns>
        public async Task UpdateDashBoardAsync(IEnumerable<DashBoardDto> updates)
        {
            try
            {
                // column order matters here; must match the user defined table type
                var table = new DataTable();             
                table.Columns.Add("Name", typeof(string));

                foreach (var update in updates)
                {
                    table.Rows.Add(update.Name);
                }

                using var connection = new SqlConnection(this.Config.ConnectionString)
                {
                    AccessToken = this.GetAccessTokenAsync()
                };

                await connection.ExecuteAsync(
                    "dbo.DashBoard",
                    new { @Updates = table.AsTableValuedParameter("DashBoard") },
                    commandType: CommandType.StoredProcedure);
            }
            catch (SqlException ex)
            {
                this.Logger.LogError(ex, "Failed to update .");
            }
        }


    }
}
