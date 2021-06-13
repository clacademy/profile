using MediatR;
using Social.Application.SampleTexts.Models;
using System.Collections.Generic;

namespace Social.Application.SampleTexts.Queries
{
    public class GetSampleTextsPreviewQuery : IRequest<List<SampleTextsPreviewDto>>
    {
    }
}
