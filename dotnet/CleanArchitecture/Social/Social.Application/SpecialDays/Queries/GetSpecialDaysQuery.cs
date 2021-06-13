using MediatR;
using Social.Application.SpecialDays.Models;
using System.Collections.Generic;

namespace Social.Application.SpecialDays.Queries
{
    public  class GetSpecialDaysQuery : IRequest<List<SpecialDaysPreviewDto>>
    {
    }
}
