using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InboxManagementServer.Data.AppDbContext;
using InboxManagementServer.Models;

namespace InboxManagementServer.Services
{
    public interface IInboxRepository
    {
        List<CalendarNotification> GetAllCalendarNotifications(string role, String userName);
        AppointmentDetails GetAppointmentDeatils(int appointmentId);
        ResultModel UpdateAppointmentAction(int appointmentId, string isApproved, string reason);
    }

    public class InboxDbRepository : IInboxRepository
    {
        PMSYSTEMContext _dbContext = new PMSYSTEMContext();

        public InboxDbRepository(PMSYSTEMContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public List<CalendarNotification> GetAllCalendarNotifications(string role, String userName)
        {
            int userId;
            List<CalendarNotification> calendarNotifications = new List<CalendarNotification>();
            CalendarNotification data;
            List<Appointment> lstAppointment = new List<Appointment>();
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            if (role == "doctor")
            {
                userId = _dbContext.DoctorMasters.Where(x => x.UserLoginDetailsId == user.Id).SingleOrDefault().Id;
                lstAppointment = _dbContext.Appointments.Where(x => x.DoctorId == userId).ToList();
            }
            if (role == "patient")
            {
                userId = _dbContext.PatientMasters.Where(x => x.UserLoginDetailsId == user.Id).SingleOrDefault().Id;
                lstAppointment = _dbContext.Appointments.Where(x => x.PatientId == userId).ToList();
            }

            foreach (Appointment item in lstAppointment)
            {
                data = new CalendarNotification()
                {
                    id = item.Id,
                    title = item.Description,
                    date = item.MeetingStartTime.GetValueOrDefault().ToString("yyyy-MM-dd"),
                    textColor = "white",
                    backgroundColor = GetNotificationColor(Convert.ToString(item.IsConfirmed)),
                    start = item.MeetingStartTime.GetValueOrDefault().ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss"),
                    end = item.MeetingEndTime.GetValueOrDefault().ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss")
                };
                calendarNotifications.Add(data);
            }
            return calendarNotifications;
        }

        public AppointmentDetails GetAppointmentDeatils(int appointmentId)
        {
            var data = (from b in _dbContext.Appointments
                        join c in _dbContext.PatientMasters
                        on new { cond1 = b.PatientId.ToString() } equals new { cond1 = c.Id.ToString() }
                        where b.Id == appointmentId
                        select new
                        {
                            Id = b.Id,
                            patientname = c.FirstName + " " + c.LastName,
                            date = b.MeetingStartTime.GetValueOrDefault().ToShortDateString(),
                            fromtime = b.MeetingStartTime.GetValueOrDefault().ToShortTimeString(),
                            totime = b.MeetingEndTime.GetValueOrDefault().ToShortTimeString(),
                            isapproved = b.IsConfirmed,
                            reason = b.Notes,
                            patientDisplayId = c.PatientDisplayId,
                            description = b.Description
                        }).ToList();

            var item = data.FirstOrDefault();
            AppointmentDetails appointmentDetails = new AppointmentDetails()
            {
                id = item.Id,
                patientId = item.patientDisplayId,
                patientName = item.patientname,
                date = item.date,
                startTime = item.fromtime,
                endTime = item.totime,
                description = item.description,
                reason=item.reason,
                status=GetNotificationStatus(Convert.ToString(item.isapproved))
            };
            return appointmentDetails;
        }

        public string GetNotificationColor(string isConfirmed)
        {
            string color="";
            switch(isConfirmed.ToLower())
            {
                case "false":
                    color = "red";
                    break;
                case "true":
                    color = "green";
                    break;
                default:
                    color = "yellow";
                    break;
            }
            return color;
        }

        public string GetNotificationStatus(string isConfirmed)
        {
            string color = "";
            switch (isConfirmed.ToLower())
            {
                case "false":
                    color = "Rejected";
                    break;
                case "true":
                    color = "Approved";
                    break;
                default:
                    color = "Pending";
                    break;
            }
            return color;
        }

        public ResultModel UpdateAppointmentAction(int appointmentId,string isApproved, string reason)
        {
            ResultModel rs = new ResultModel();
                Appointment appointment = _dbContext.Appointments.SingleOrDefault(x => x.Id == appointmentId);
                if (appointment != null)
                {
                    appointment.IsConfirmed = (isApproved=="Approved")?true:false;
                    appointment.Notes = reason;
                    appointment.RespondedOn = DateTime.Now;
                    appointment.ModifiedOn = DateTime.Now;
                    _dbContext.SaveChanges();
                    rs.Code = 1;
                    rs.Response = "Data Saved";
                AppointmentActionNotification(appointmentId, isApproved);
                }
                else
                {
                    rs.Code = 4;
                    rs.Response = "Appointment details not found.";
                }
            return rs;
        }


        public void AppointmentActionNotification(int appointmentId, string isApproved)
        {
            var data = (from a in _dbContext.DoctorMasters
                        join b in _dbContext.Appointments
                        on new { cond1 = a.Id.ToString() } equals new { cond1 = b.DoctorId.ToString() }
                        join c in _dbContext.PatientMasters
                        on new { cond1 = b.PatientId.ToString() } equals new { cond1 = c.Id.ToString() }
                        where b.Id==appointmentId
                        select new
                        {
                            Id = b.Id,
                            drname = a.FirstName + " " + a.LastName,
                            patientname = c.FirstName + " " + c.LastName,
                            date = b.MeetingStartTime.GetValueOrDefault().ToShortDateString(),
                            fromtime = b.MeetingStartTime.GetValueOrDefault().ToShortTimeString(),
                            totime = b.MeetingEndTime.GetValueOrDefault().ToShortTimeString(),
                            drid = b.DoctorId,
                            patientid = b.PatientId,
                            isapproved = b.IsConfirmed,
                            reason = b.Notes,
                            drdisplayid = a.DoctorDisplayId,
                            patientdisplayid = c.PatientDisplayId,
                            description = b.Description
                        }).ToList();

            var item = data.FirstOrDefault();
            string userLoginDetailsId = _dbContext.PatientMasters.Where(x => x.Id == Convert.ToInt32(item.patientid)).SingleOrDefault().UserLoginDetailsId;
                if ((isApproved == "Approved") ? true : false)
                {
                    Notification notification = new Notification
                    {
                        Description = "Your appointment is approved by doctor " + item.drname + " for date " + item.date + " and time " + item.fromtime,
                        UserLoginDetailsId = userLoginDetailsId,
                        IsSeen = false,
                        CreatedOn = DateTime.Now,
                        ModifiedOn = DateTime.Now
                    };
                    _dbContext.Notifications.Add(notification);
                    _dbContext.SaveChanges();
                }
                else
                {
                    Notification notification = new Notification
                    {
                        Description = "Your appointment is rejected by doctor " + item.drname + " for date " + item.date,
                        UserLoginDetailsId = userLoginDetailsId,
                        IsSeen = false,
                        CreatedOn = DateTime.Now,
                        ModifiedOn = DateTime.Now
                    };
                    _dbContext.Notifications.Add(notification);
                    _dbContext.SaveChanges();
                }
        }
    }
}
