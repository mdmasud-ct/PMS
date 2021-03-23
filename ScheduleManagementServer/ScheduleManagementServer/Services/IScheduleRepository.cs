using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScheduleManagementServer.Data.AppDbContext;
using ScheduleManagementServer.Models;

namespace ScheduleManagementServer.Services
{
    public interface IScheduleRepository
    {
        List<DoctorMaster> GetAllDoctors();
        List<DoctorMaster> GetFilteredDoctors(string city = "", string speciality = "", string gender = "");

        AppoinmentModel GetAppoinmentData(string doctorId, string patientUserName);

        ResultModel SaveAppoinmentData(AppoinmentModel model);
    }

    public class ScheduleDbRepository : IScheduleRepository
    {
        PMSYSTEMContext _dbContext = new PMSYSTEMContext();

        public ScheduleDbRepository(PMSYSTEMContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public List<DoctorMaster> GetAllDoctors()
        {
            List<DoctorMaster> data = new List<DoctorMaster>();
                data = _dbContext.DoctorMasters.ToList();
            return data;
        }

        public List<DoctorMaster> GetFilteredDoctors(string city = "", string speciality = "", string gender = "")
        {
            List<DoctorMaster> data = new List<DoctorMaster>();
            if (string.IsNullOrEmpty(gender))
            {
                data = _dbContext.DoctorMasters.ToList();
            }
            else
            {
                data = _dbContext.DoctorMasters.Where(x => x.Gender == gender).ToList();
            }
            return data;
        }

        public AppoinmentModel GetAppoinmentData(string doctorId, string patientUserName)
        {
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == patientUserName);
            PatientMaster patientMaster = _dbContext.PatientMasters.SingleOrDefault(x => x.UserLoginDetailsId == user.Id);
            DoctorMaster doctorMaster = _dbContext.DoctorMasters.SingleOrDefault(x => x.Id == Convert.ToInt32(doctorId));
            AppoinmentModel data = new AppoinmentModel
            {
                drname = doctorMaster.FirstName + " " + doctorMaster.LastName,
                patientname = patientMaster.FirstName + " " + patientMaster.LastName,       
                drid = doctorMaster.Id.ToString(),
                patientid = patientMaster.Id.ToString(),
                speciality=doctorMaster.Speciality
            };
            return data;
        }

        public ResultModel SaveAppoinmentData(AppoinmentModel model)
        {
            ResultModel rs = new ResultModel();
            Appointment appointment = new Appointment
            {
                Description = model.description,
                DoctorId=Convert.ToInt32(model.drid),
                MeetingStartTime=Convert.ToDateTime(model.date+" "+ model.fromtime),
                MeetingEndTime= Convert.ToDateTime(model.date + " " + model.totime),
                PatientId=Convert.ToInt32(model.patientid),
                CreatedOn=DateTime.Now,
                ModifiedOn=DateTime.Now
            };
            _dbContext.Appointments.Add(appointment);
            _dbContext.SaveChanges();
            SetNotification(Convert.ToInt32(model.drid),model.patientname);
            rs.Code = 1;
            return rs;
        }

        public void SetNotification(int doctorId, string patientName)
        {
            string userLoginDetailsId = _dbContext.DoctorMasters.Where(x => x.Id == Convert.ToInt32(doctorId)).SingleOrDefault().UserLoginDetailsId;
            Notification notification = new Notification
            { 
            Description="Received new appointment request from "+patientName+"",
            UserLoginDetailsId=userLoginDetailsId,
            IsSeen=false,
            CreatedOn=DateTime.Now,
            ModifiedOn=DateTime.Now
            };
            _dbContext.Notifications.Add(notification);
            _dbContext.SaveChanges();
        }
    }
}
