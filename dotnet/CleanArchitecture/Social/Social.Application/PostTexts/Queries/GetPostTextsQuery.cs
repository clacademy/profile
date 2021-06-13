using MediatR;
using Social.Application.PostTexts.Models;
using System.Collections.Generic;

namespace Social.Application.PostTexts.Queries
{
    class GetPostTextsQuery : IRequest<List<PostTextsPreviewDto>>
    {
    }
}
