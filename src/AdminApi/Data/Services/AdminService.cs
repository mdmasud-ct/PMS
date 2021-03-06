using AdminApi.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminApi.Data.AppDbContext;
namespace AdminApi.Data.Services
{
	public class AdminService : IAdminService
	{
		private PMSYSTEMContext _ctx;
		public AdminService(PMSYSTEMContext context) {
			_ctx = context;
		}
		public IEnumerable<DoctorMaster> GetAllDoctor()
		{
			return _ctx.DoctorMasters;
		}

		public IEnumerable<NurseMaster> GetAllNurse()
		{
			return _ctx.NurseMasters;
		}

		public IEnumerable<PatientMaster> GetAllPatient()
		{
			return _ctx.PatientMasters;
		}

		public DoctorMaster GetDoctor(int Id)
		{
			return _ctx.DoctorMasters.Where(x=>x.Id == Id).FirstOrDefault();
		}

		public NurseMaster GetNurse(int Id)
		{
			return _ctx.NurseMasters.Where(x=>x.Id == Id).FirstOrDefault();
		}

		public PatientMaster GetPatient(int Id)
		{
			return _ctx.PatientMasters.Where(x=>x.Id==Id).FirstOrDefault();
		}
	}
}
