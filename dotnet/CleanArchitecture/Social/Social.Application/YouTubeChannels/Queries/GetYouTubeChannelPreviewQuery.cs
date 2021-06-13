using MediatR;
using Social.Application.YouTubeChannels.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Application.YouTubeChannels.Queries
{
    public class GetYouTubeChannelPreviewQuery : IRequest<List<YouTubeChannelPreviewDto>>
    {
    }
}
