using MediatR;
using Social.Application.BackLinks.Models;
using System.Collections.Generic;

namespace Social.Application.BackLinks.Queries
{
    public class GetBacklinksQuery : IRequest<List<BackLinksPreviewDto>>
    {
    }
}
