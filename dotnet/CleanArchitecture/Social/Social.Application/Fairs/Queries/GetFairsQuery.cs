using MediatR;
using Social.Application.Fairs.Models;
using System.Collections.Generic;

namespace Social.Application.Fairs.Queries
{
    public class GetFairsQuery : IRequest<List<FairsPreviewDto>>
    {
    }
}
