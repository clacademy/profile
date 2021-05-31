namespace Services.Interfaces
{
    using Models.DTO;
    using Models.Enums;
    using System.Threading.Tasks;
    public interface IDashboardService
    {
        Task<ResultType> GetDashBoardsAsync(VolunteerDto volunteer);
    }
}
