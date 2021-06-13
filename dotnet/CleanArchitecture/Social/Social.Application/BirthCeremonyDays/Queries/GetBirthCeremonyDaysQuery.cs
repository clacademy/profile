using MediatR;
using Social.Application.BirthCeremonyDays.Models;
using System.Collections.Generic;

namespace Social.Application.BirthCeremonyDays.Queries
{
    public class GetBirthCeremonyDaysQuery : IRequest<List<BirthCeremonyDaysPreviewDto>>
    {
    }
}
