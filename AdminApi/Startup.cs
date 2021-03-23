using AdminApi.Data.AppDbContext;
using AdminApi.Data.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AdminApi
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
			services.AddAuthentication(options =>
			{
				options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			}).AddJwtBearer(o =>
			{
				o.Authority = "http://localhost:60970";
				//o.Authority = Configuration.GetValue<string>("authority");
				o.Audience = "resourceapi";
				o.RequireHttpsMetadata = false;
				
			});

			services.AddAuthorization(options =>
			{
				options.AddPolicy("ApiReader", policy => policy.RequireClaim("scope", "api.read"));
				options.AddPolicy("Role", policy => policy.RequireClaim(ClaimTypes.Role, "consumer"));
			});
			services.AddControllers();
			services.AddDbContext<PMSYSTEMContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));

			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", new OpenApiInfo { Title = "AdminApi", Version = "v1" });
			});
			services.AddTransient<IAdminService, AdminService>();
			services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
			   .AllowAnyMethod()
			   .AllowAnyHeader()));

		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseSwagger();
				app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AdminApi v1"));
			}

			//app.UseHttpsRedirection();
			
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
			app.UseRouting();


			app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
			app.UseAuthentication();
			app.UseAuthorization();


			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
