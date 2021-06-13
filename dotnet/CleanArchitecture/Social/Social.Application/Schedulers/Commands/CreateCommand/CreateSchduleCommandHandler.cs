using MediatR;
using Social.Domain.Entities;
using Social.Persistence;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Social.Application.Schedulers.Commands.CreateCommand
{
    public class CreateSchduleCommandHandler : IRequestHandler<CreateSchduleCommand, int>
    {
        private readonly SocialDbContext _context;
        public CreateSchduleCommandHandler(SocialDbContext context)
        {
            _context = context;
        }
        public async Task<int> Handle(CreateSchduleCommand request, CancellationToken cancellationToken)
        {
            foreach (var socialsiteId in request.Socialsites)
            {
                var entity = new Scheduler
                {
                    SchedulerDate = request.Schduledate,
                    Category = request.Category,
                    CreatedOn = DateTime.Now,
                    FromPostId = request.FromPostId,
                    SampleTextId = request.SampleTextId,
                    SchedulerText = request.SchduleTextFull,
                    SchedulerTime = request.Schduletime,
                    UpdatedOn = DateTime.Now,
                    SocialSiteId = socialsiteId,
                    IsPosted=false
                };

                _context.Schedulers.Add(entity);

                await _context.SaveChangesAsync(cancellationToken);

               // return entity.SchedulerId;
            }
            return 1;
        }
    }
}
