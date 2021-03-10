using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagementServer.Services;
using PatientManagementServer.Data.AppDbContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.Net;
using Microsoft.AspNetCore.Diagnostics;

namespace PatientManagementServer
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

            services.AddDbContext<PMSYSTEMContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));
            services.AddScoped<IPatientRepository, PatientDbRepository>();
            //services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "PatientManagementServer", Version = "v1" });
            });

            services.AddControllers(option =>
            {
                option.RespectBrowserAcceptHeader = true;
                option.ReturnHttpNotAcceptable = true;
            }).AddXmlDataContractSerializerFormatters();

            //services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
            // .AllowAnyOrigin()
            // .AllowAnyMethod()
            // .AllowAnyHeader()));

            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowOrigin",
            //    builder =>
            //    {
            //        builder.WithOrigins("http://localhost:4200")
            //                            .AllowAnyHeader()
            //                            .AllowAnyMethod()
            //                            .AllowCredentials();
            //    });
            //});

            services.AddCors(options =>
            {
                options.AddPolicy(name: "allowall",
                builder =>
                {
                    builder.AllowAnyOrigin();
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                    //builder.WithOrigins("http://localhost:4200");
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "PatientManagementServer v1"));
            }

            app.UseCookiePolicy(new CookiePolicyOptions { MinimumSameSitePolicy = SameSiteMode.Lax }); 
            app.UseExceptionHandler(builder =>
            {
                builder.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.Headers.Add("Access-Control-Allow-Origin", "*");

                    var error = context.Features.Get<IExceptionHandlerFeature>();
                    if (error != null)
                    {
                        //context.Response.AddApplicationError(error.Error.Message);
                        await context.Response.WriteAsync(error.Error.Message).ConfigureAwait(false);
                    }
                });
            });

            //app.UseHttpsRedirection();

           
            app.UseRouting();
            app.UseCors("allowall");

            //app.Use(function(req, res, next) {
            //    // Website you wish to allow to connect
            //    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
            //    // Request methods you wish to allow
            //    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            //    // Request headers you wish to allow
            //    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            //    // Set to true if you need the website to include cookies in the requests sent
            //    // to the API (e.g. in case you use sessions)
            //    res.setHeader('Access-Control-Allow-Credentials', true);
            //    // Pass to next layer of middleware
            //    next();
            //});

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

           
        }
    }
}
