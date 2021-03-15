using AdminApi.Data.AppDbContext;
using AdminApi.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminApi.Data.Services;
using AdminApi.Models;
using Microsoft.AspNetCore.Authorization;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AdminApi.Controllers
{
	[Route("api/[controller]")]
	[Authorize(Policy ="ApiReader")]
	[ApiController]
	public class AdminController : ControllerBase
	{
		public IAdminService _admindao;
		public AdminController(IAdminService admin) {
			_admindao = admin;
		}
		#region Doctor
		[HttpGet("/Doctors")]
		[Authorize(Policy ="Role")]
		public IEnumerable<DoctorMaster> GetDoctor()
		{
			var header = HttpContext.Request;
			try {
				return _admindao.GetAllDoctor();
			} catch (Exception e) {
				return null;
			}
		}

		[Authorize(Policy ="Role")]
		[HttpGet("/Doctor/{id}")]
		public DoctorMaster Get(int id)
		{
			try
			{
				return _admindao.GetDoctor(id);
			}
			catch (Exception e) {
				return null;
			}
		}

		// POST api/<AdminController>
		[HttpPost("/Doctor")]
		public void Post([FromBody] string doctor)
		{
			ResultModel res = new ResultModel();
			try
			{
				res.Code = 1;
				res.Response = "Successfully Registered";
			}
			catch (Exception e) {
				res.Code = 4;
				res.Response = e.Message;
			}
		}
		#endregion
		#region Nurse
		[Authorize(Policy = "Role")]
		[HttpGet("/Nurses")]
		public IEnumerable<NurseMaster> GetNurse()
		{
			try
			{
				return _admindao.GetAllNurse();
			}
			catch (Exception e)
			{
				return null;
			}
		}

		[HttpGet("/Nurse/{id}")]
		public NurseMaster Getnurse(int id)
		{
			try
			{
				return _admindao.GetNurse(id);
			}
			catch (Exception e)
			{
				return null;
			}
		}

		[HttpPost("/Nurse")]
		public void PostNurse([FromBody] string nurse)
		{
			ResultModel res = new ResultModel();
			try
			{
				res.Code = 1;
				res.Response = "Successfully Registered";
			}
			catch (Exception e)
			{
				res.Code = 4;
				res.Response = e.Message;
			}
		}
		#endregion
		#region Patient
		[HttpGet("/Patients")]
		public IEnumerable<PatientMaster> GetAllPatient() {
			try
			{
				return _admindao.GetAllPatient();
			}
			catch (Exception e) {
				return null;
			}
		}

		#endregion

		[HttpGet]
		public ActionResult<IEnumerable<string>> Get()
		{
			var header = HttpContext.Request;
			var user = HttpContext.User;
			return new JsonResult(User.Claims.Select(c => new { c.Type, c.Value }));
		}

	}
}
