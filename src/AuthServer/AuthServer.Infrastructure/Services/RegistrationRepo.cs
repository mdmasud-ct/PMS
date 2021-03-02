using AuthServer.Models;
using System;
using System.Collections.Generic;
using System.Text;
using AuthServer.Infrastructure.Data;
using AuthServer.Infrastructure.Models;
using System.Linq;
namespace AuthServer.Infrastructure.Services
{
	public class RegistrationRepo : IRegistrationRepo
	{
		private readonly PMSYSTEMContext ctx;

		public RegistrationRepo(PMSYSTEMContext _context) {
			ctx = _context;
		}
		
		public void AddDoctor(UsersModel model)
		{
			if (!string.IsNullOrEmpty(model.Id))
			{
				DoctorMaster doctor = new DoctorMaster
				{
					EmailId = model.Email,
					FirstName = model.FirstName,
					LastName = model.LastName,
					Dob = model.DOB,
					IsActive = true,//by Default
					UserLoginDetailsId = model.Id,
					CreatedBy = model.CreatedBy,
					ModifiedBy = model.UpdatedBy,
					CreatedOn = DateTime.Now,
					ModifiedOn = DateTime.Now,
					Gender = model.Gender,
					Age = AgeCalculator(model.DOB),
					DoctorDisplayId = GetDoctorId()
				};
				ctx.DoctorMaster.Add(doctor);
				ctx.SaveChanges();
			}
			else {
				throw new Exception("User not registered.");
			}
		}

		public void AddNurse(UsersModel model)
		{
			if (!string.IsNullOrEmpty(model.Id))
			{
				NurseMaster nurse = new NurseMaster
				{
					EmailId = model.Email,
					FirstName = model.FirstName,
					LastName = model.LastName,
					Dob = model.DOB,
					IsActive = true,//by Default
					UserLoginDetailsId = model.Id,
					CreatedBy = model.CreatedBy,
					ModifiedBy = model.UpdatedBy,
					CreatedOn = DateTime.Now,
					ModifiedOn = DateTime.Now,
					Gender = model.Gender,
					Age = AgeCalculator(model.DOB),
					NurseDisplayId = GetNurseId()
				};
				ctx.NurseMaster.Add(nurse);
				ctx.SaveChanges();
			}
			else
			{
				throw new Exception("User not registered.");
			}
		}

		public void AddPatient(UsersModel model)
		{
			if (!string.IsNullOrEmpty(model.Id))
			{
				PatientMaster patient = new PatientMaster
				{
					EmailId = model.Email,
					FirstName = model.FirstName,
					LastName = model.LastName,
					Dob = model.DOB,
					IsActive = true,//by Default
					UserLoginDetailsId = model.Id,
					//CreatedBy = model.CreatedBy,
					ModifiedBy = model.UpdatedBy,
					CreatedOn = DateTime.Now,
					ModifiedOn = DateTime.Now,
					Gender = model.Gender,
					Address = model.Address,
					ContactNumber = model.PhoneNumber,
					Age = AgeCalculator(model.DOB),
					PatientDisplayId = GetPatientId(),
					
				};
				ctx.PatientMaster.Add(patient);
				ctx.SaveChanges();
			}
			else
			{
				throw new Exception("User not registered.");
			}
		}

		public void UpdateUserDetails(UsersModel model)
		{
			using (var context = new PMSYSTEMContext()) { 
				
			}
		}

		private string GetDoctorId() {
			try
			{
				var id = ctx.DoctorMaster.Select(s => s.Id).Max() + 1;
				return "DT-"+id.ToString("D4");
			}
			catch (Exception e) {
				return "DT-" + "0001";
			}
		}
		
		private string GetPatientId()
		{
			try
			{
				var id = ctx.PatientMaster.Select(s => s.Id).Max() + 1;
				return "PT-" + id.ToString("D4");
			}
			catch (Exception e)
			{
				return "PT-" + "0001";
			}
		}
		
		private string GetNurseId()
		{
			try
			{
				var id = ctx.NurseMaster.Select(s => s.Id).Max() + 1;
				return "NR-" + id.ToString("D4");
			}
			catch (Exception e)
			{
				return "NR-" + "0001";
			}
		}

		private int AgeCalculator(DateTime date) {
			var age = DateTime.Now.Year - date.Year;
			return age;
		}
	}
}
