using AdminApi.Data.AppDbContext;
using AdminApi.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminApi.Data.Services;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AdminApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AdminController : ControllerBase
	{
		public IAdminService _admindao;
		public AdminController(IAdminService admin) {
			_admindao = admin;
		}

		[HttpGet("/Doctors")]
		public IEnumerable<DoctorMaster> GetDoctor()
		{
			try {
				return _admindao.GetAllDoctor();
			} catch (Exception e) {
				return null;
			}
		}

		// GET api/<AdminController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

		// POST api/<AdminController>
		[HttpPost]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/<AdminController>/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/<AdminController>/5
		[HttpDelete("{id}")]
		public void Delete(int id)
		{
		}
	}
}
