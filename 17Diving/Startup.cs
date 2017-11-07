using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_17Diving.Startup))]
namespace _17Diving
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
