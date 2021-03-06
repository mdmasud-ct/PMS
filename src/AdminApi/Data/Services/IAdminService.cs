using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminApi.Data.Models;
namespace AdminApi.Data.Services
{
	public interface IAdminService
	{
		public IEnumerable<DoctorMaster> GetAllDoctor();
		public DoctorMaster GetDoctor(int Id);
		public IEnumerable<PatientMaster> GetAllPatient();
		public PatientMaster GetPatient(int Id);
		public IEnumerable<NurseMaster> GetAllNurse();
		public NurseMaster GetNurse(int Id);

	}
}
