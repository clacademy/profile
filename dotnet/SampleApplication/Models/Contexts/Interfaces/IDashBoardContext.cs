namespace Models.Contexts.Interfaces
{
    using Models.DTO;
    using Models.Enums;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    public interface IDashBoardContext
    {
        Task<DashBoardDto> GetDashBoardAsync(int clientId);

        Task<IEnumerable<DashBoardDto>> GetDashBoardsAsync();

        Task<ResultType> SaveDashBoardAsync(DashBoardDto result);

        Task UpdateDashBoardAsync(IEnumerable<DashBoardDto> tokens);
    }
}
