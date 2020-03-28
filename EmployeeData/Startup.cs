using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Model;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace EmployeeData
{
    /// <summary>
    /// startup class
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="configuration"></param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        /// <summary>
        /// proporty
        /// </summary>
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        /* public void ConfigureServices(IServiceCollection services)
         {
             services.AddDbContextPool<EmployeeContext>(options => options.UseSqlServer(Configuration.GetConnectionString("EmployeeDB")));
             services.AddControllers();
         }*/
       /// <summary>
       /// method
       /// </summary>
       /// <param name="services"></param>
            public void ConfigureServices(IServiceCollection services)
                => services.AddDbContext<EmployeeContext>();
        

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
       /* public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }*/
    }
}
