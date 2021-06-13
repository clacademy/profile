using MediatR;
using Social.Application.ImagePublisheds.Models;
using System.Collections.Generic;

namespace Social.Application.ImagePublisheds.Queries
{
    public class GetImagePublishedsQuery : IRequest<List<ImagePublishedsPreviewDto>>
    {
    }
}
