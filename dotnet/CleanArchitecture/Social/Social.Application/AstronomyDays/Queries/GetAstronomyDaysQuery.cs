using MediatR;
using Social.Application.AstronomyDays.Models;
using System.Collections.Generic;

namespace Social.Application.AstronomyDays.Queries
{
    public class GetAstronomyDaysQuery : IRequest<List<AstronomyDaysPreviewDto>>
    {
    }
}
