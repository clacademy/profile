using MediatR;
using Social.Application.SocialSites.Models;
using System.Collections.Generic;

namespace Social.Application.SocialSites.Queries
{
    public class GetSocialSitePreviewQuery : IRequest<List<SocialSitesPreviewDto>>
    {
    }
}
