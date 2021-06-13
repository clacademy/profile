using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Social.Application.Schedulers.Commands.CreateCommand
{
   public class CreateSchduleCommand : IRequest<int>
    {
        public int[] Socialsites { get; set; }
        public DateTimeOffset Schduledate { get; set; }
        public TimeSpan Schduletime { get; set; }
        public string SchduleTextFull { get; set; }
        public int SampleTextId { get; set; }
        public string Category { get; set; }
        public int FromPostId { get; set; }
    }
}
