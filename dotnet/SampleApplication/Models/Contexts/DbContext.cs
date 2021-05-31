namespace Models.Contexts
{
    using Microsoft.Extensions.Options;
    using Models.Configuration;

    public abstract class DbContext
    {
        protected DbContext(IOptions<DbConfig> config)
        {
            this.Config = config.Value;          
        }

        /// <summary>
        /// DB configuration from local.settings.json or appsettings.
        /// </summary>
        protected DbConfig Config { get; }

        protected string GetAccessTokenAsync()
        {
            return "AccessToken";
        }
    }
}
