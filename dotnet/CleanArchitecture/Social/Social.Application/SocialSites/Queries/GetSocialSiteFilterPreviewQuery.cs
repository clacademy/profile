using MediatR;
using Social.Application.SocialSites.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Application.SocialSites.Queries
{
   public class GetSocialSiteFilterPreviewQuery : IRequest<List<SocialSitesPreviewDto>>
    {
    }
}
