using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InboxManagementServer.Models;
using InboxManagementServer.Services;

namespace InboxManagementServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InboxController : ControllerBase
    {

        private IInboxRepository _inboxRepository;
        public InboxController(IInboxRepository inboxRepository)
        {
            _inboxRepository = inboxRepository;
        }

        /// <summary>
        /// To get all appoinment data for calendar
        /// </summary>
        [HttpGet("getcalendarappointment")]
        public IActionResult GetAllCalendarNotifications(string role,string userName)
        {
            List<CalendarNotification> data = new List<CalendarNotification>();
            try
            {
                if (userName == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    data = _inboxRepository.GetAllCalendarNotifications(role, userName);
                    return Ok(data);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get all appoinment details for perticular event
        /// </summary>
        [HttpGet("getappointmentdetails")]
        public IActionResult GetAppointmentsDetails(int appointmentId)
        {
            AppointmentDetails data = new AppointmentDetails();
            try
            {
                if (appointmentId <= 0)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    data = _inboxRepository.GetAppointmentDeatils(appointmentId);
                    return Ok(data);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get all appoinment details for perticular event
        /// </summary>
        [HttpPost("updateappointmentaction")]
        public IActionResult UpdateAppointmentAction(int appointmentId, string isApproved, string reason)
        {
            try
            {
                ResultModel res = new ResultModel();
                if (appointmentId <= 0)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    res = _inboxRepository.UpdateAppointmentAction(appointmentId,isApproved,string.IsNullOrEmpty(reason)?"":reason);
                    return Ok(res);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
