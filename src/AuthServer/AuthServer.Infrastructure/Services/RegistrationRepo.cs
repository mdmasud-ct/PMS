using AuthServer.Models;
using System;
using System.Collections.Generic;
using System.Text;
using AuthServer.Infrastructure.Data;
using AuthServer.Infrastructure.Models;
using System.Linq;
using AuthServer.Infrastructure.Data.AppDbContext;
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
			if (!(string.IsNullOrEmpty(model.loginId) && model.Id!=0))
			{
				if (model.Id==0)
				{
					DoctorMaster doctor = new DoctorMaster
					{
						EmailId = model.Email,
						FirstName = model.FirstName,
						LastName = model.LastName,
						Dob = model.DOB,
						IsActive = true,//by Default
						UserLoginDetailsId = model.loginId,
						CreatedBy = model.CreatedBy,
						ModifiedBy = model.UpdatedBy,
						CreatedOn = DateTime.Now,
						ModifiedOn = DateTime.Now,
						Gender = model.Gender,
						Age = AgeCalculator(model.DOB),
						DoctorDisplayId = GetDoctorId(),
						Title = model.Title,
						Address = model.Address,
						City = model.City,
						PhoneNo = model.ContactNo,
						Speciality = model.Speciality,
						
					};
					ctx.DoctorMasters.Add(doctor);
				}
				else {
					var doctor = ctx.DoctorMasters.Where(x => x.Id == model.Id).FirstOrDefault();
					if (doctor != null) {
						doctor.FirstName = model.FirstName;
						doctor.LastName = model.LastName;
						doctor.Address = model.Address;
						doctor.City = model.City;
						doctor.PhoneNo = model.ContactNo;

					}
 				}
				ctx.SaveChanges();
			}
			else {
				if (model.Id != 0)
				{
					var doctor = ctx.DoctorMasters.Where(x => x.Id == model.Id).FirstOrDefault();
					if (doctor != null)
					{
						doctor.FirstName = model.FirstName;
						doctor.LastName = model.LastName;
						doctor.Address = model.Address;
						doctor.City = model.City;
						doctor.PhoneNo = model.ContactNo;
						doctor.Speciality = model.Speciality;
						doctor.Dob = model.DOB;
						doctor.Age = AgeCalculator(model.DOB);
						doctor.Gender = model.Gender;
						doctor.Title = model.Title;
						ctx.SaveChanges();
					}
				}
				else
				{
					throw new Exception("User not registered.");
				}
			}
		}

		public void AddNurse(UsersModel model)
		{
			if (!(string.IsNullOrEmpty(model.loginId) && model.Id != 0))
			{
					NurseMaster nurse = new NurseMaster
					{
						EmailId = model.Email,
						FirstName = model.FirstName,
						LastName = model.LastName,
						Dob = model.DOB,
						IsActive = true,//by Default
						UserLoginDetailsId = model.loginId,
						CreatedBy = model.CreatedBy,
						ModifiedBy = model.UpdatedBy,
						CreatedOn = DateTime.Now,
						ModifiedOn = DateTime.Now,
						Gender = model.Gender,
						Age = AgeCalculator(model.DOB),
						NurseDisplayId = GetNurseId(),
						Title = model.Title,
						Address = model.Address,
						City = model.City,
						PhoneNo = model.ContactNo,
					};
					ctx.NurseMasters.Add(nurse);
					ctx.SaveChanges();
			}
			else
			{
				if (model.Id != 0)
				{
					var doctor = ctx.NurseMasters.Where(x => x.Id == model.Id).FirstOrDefault();
					if (doctor != null)
					{
						doctor.FirstName = model.FirstName;
						doctor.LastName = model.LastName;
						doctor.Address = model.Address;
						doctor.City = model.City;
						doctor.PhoneNo = model.ContactNo;
						doctor.Dob = model.DOB;
						doctor.Age = AgeCalculator(model.DOB);
						doctor.Gender = model.Gender;
						doctor.Title = model.Title;
						ctx.SaveChanges();
					}
				}
				else
				{
					throw new Exception("User not registered.");
				}
			}
		}

		public void AddPatient(UsersModel model)
		{
			if (!string.IsNullOrEmpty(model.loginId))
			{
				PatientMaster patient = new PatientMaster
				{
					EmailId = model.Email,
					FirstName = model.FirstName,
					LastName = model.LastName,
					Dob = model.DOB,
					IsActive = true,//by Default
					UserLoginDetailsId = model.loginId,
					//CreatedBy = model.CreatedBy,
					ModifiedBy = model.UpdatedBy,
					CreatedOn = DateTime.Now,
					ModifiedOn = DateTime.Now,
					Gender = model.Gender,
					Address = model.Address,
					//ContactNumber = model.PhoneNumber,
					Age = AgeCalculator(model.DOB),
					PatientDisplayId = GetPatientId(),
					Title = model.Title,
					City = model.City,
					PhoneNo = model.ContactNo,
				};
				ctx.PatientMasters.Add(patient);
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
				var id = ctx.DoctorMasters.Select(s => s.Id).Max() + 1;
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
				var id = ctx.PatientMasters.Select(s => s.Id).Max() + 1;
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
				var id = ctx.NurseMasters.Select(s => s.Id).Max() + 1;
				return "NR-" + id.ToString("D4");
			}
			catch (Exception e)
			{
				return "NR-" + "0001";
			}
		}

		public void UpdateDocStatus(UsersModel model) {
			var doc = ctx.DoctorMasters.Where(x => x.Id == model.Id).FirstOrDefault();
			if (doc != null)
			{
				doc.IsActive = model.IsActive;
			}
			else {
				throw new Exception("Unable to fetch Doctor. Please contacct administrator.");
			}
			ctx.SaveChanges();
		}
		public void UpdateNurseStatus(UsersModel model) {
			var doc = ctx.NurseMasters.Where(x => x.Id == model.Id).FirstOrDefault();
			if (doc != null)
			{
				doc.IsActive = model.IsActive;
			}
			else {
				throw new Exception("Unable to fetch Nurse. Please contact administrator.");
			}
			ctx.SaveChanges();
		}
		public void UpdatePatientStatus(UsersModel model) {
			var doc = ctx.PatientMasters.Where(x => x.Id == model.Id).FirstOrDefault();
			if (doc != null)
			{
				doc.IsActive = model.IsActive;
			}
			else {
				throw new Exception("Unable to fetch Patient. Please contact administrator.");
			}
			ctx.SaveChanges();
		}
		private int AgeCalculator(DateTime date) {
			var age = DateTime.Now.Year - date.Year;
			return age;
		}
	}
}
