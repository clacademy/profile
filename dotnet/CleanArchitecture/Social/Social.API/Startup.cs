using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MediatR;
using Social.Application.SocialSites.Queries;
using System.Reflection;
using Social.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Social.Application.YouTubeChannels.Queries;
using Social.Application.YouTubeVideoStatistics.Queries;
using Social.Application.YouTubeVideos.Queries;
using Social.Application.SampleTexts.Queries;
using Social.Application.Schedulers.Commands.CreateCommand;
using Social.Application.AstronomyDays.Queries;
using Social.Application.BirthCeremonyDays.Queries;
using Social.Application.CulturalDays.Queries;
using Social.Application.Fairs.Queries;
using Social.Application.SpecialDays.Queries;
using Social.Application.ImagePublisheds.Queries;
using Social.Application.BackLinks.Queries;

namespace Social.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            // services.AddTransient<INotificationService, NotificationService>();
            // services.AddTransient<IDateTime, MachineDateTime>();

            // Add MediatR
            // services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPreProcessorBehavior<,>));
            // services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPerformanceBehaviour<,>));
            //  services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));

            services.AddMediatR(typeof(GetSocialSitePreviewQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetYouTubeChannelPreviewQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(YouTubeVideoStatisticsPreviewQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetYouTubeVideoPreviewQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetSampleTextsPreviewQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(CreateSchduleCommandHandler).GetTypeInfo().Assembly);

            services.AddMediatR(typeof(GetAstronomyDaysQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetBirthCeremonyDaysQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetCulturalDaysQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetFairsQueryHandler).GetTypeInfo().Assembly);
            services.AddMediatR(typeof(GetSpecialDaysQueryHandler).GetTypeInfo().Assembly);

            services.AddMediatR(typeof(GetImagePublishedsQueryHandler).GetTypeInfo().Assembly);

            services.AddMediatR(typeof(GetBacklinksQueryHandler).GetTypeInfo().Assembly);

            // Add DbContext using SQL Server Provider
            services.AddDbContext<SocialDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("SocialDB")));

            services
                .AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);


            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowSpecificOrigin",
            //        builder => builder.WithOrigins("http://localhost:4200"));
            //});

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseCors("CorsPolicy");


            app.UseHttpsRedirection();
            app.UseStaticFiles();


            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });
        }
    }
}
