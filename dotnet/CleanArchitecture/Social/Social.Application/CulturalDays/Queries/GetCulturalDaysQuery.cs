using MediatR;
using Social.Application.CulturalDays.Models;
using System.Collections.Generic;

namespace Social.Application.CulturalDays.Queries
{
    public class GetCulturalDaysQuery : IRequest<List<CulturalDaysPreviewDto>>
    {
    }
}
