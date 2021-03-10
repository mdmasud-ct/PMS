using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScheduleManagementServer.Models;
using ScheduleManagementServer.Services;

namespace ScheduleManagementServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private IScheduleRepository _scheduleRepository;

        public ScheduleController(IScheduleRepository scheduleRepository)
        {
            this._scheduleRepository = scheduleRepository;
        }

        /// <summary>
        /// To get all doctor data
        /// </summary>
        [HttpGet("getalldoctors")]
        public IActionResult GetAllDoctorData()
        {
            List<DoctorMaster> data = new List<DoctorMaster>();
            try
            {
                data = _scheduleRepository.GetAllDoctors();
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get filtered doctor data
        /// </summary>
        [HttpGet("getfiltereddoctors")]
        public IActionResult GetFilteredDoctorData(string city = "", string speciality = "", string gender = "")
        {
            List<DoctorMaster> data = new List<DoctorMaster>();
            try
            {
                data = _scheduleRepository.GetFilteredDoctors(city, speciality , gender);
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get appoinment data
        /// </summary>
        [HttpGet("getappointment")]
        public IActionResult GetAppointmentData(int doctorId, string patientUserName)
        {
            AppoinmentModel data = new AppoinmentModel();
            try
            {
                if (string.IsNullOrEmpty(doctorId.ToString()) && string.IsNullOrEmpty(patientUserName))
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    data = _scheduleRepository.GetAppoinmentData(doctorId.ToString(), patientUserName);
                    return Ok(data);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To save appointment data
        /// </summary>
        [HttpPost("bookappoinment")]
        public IActionResult AddAppoinmentData(AppoinmentModel model)
        {
            try
            {
                ResultModel res = new ResultModel();
                if (model == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    res = _scheduleRepository.SaveAppoinmentData(model);
                    if (res.Code == 1)
                        res.Response = "Appointment Booked";
                    else
                        res.Response = "Appointment not booked due to some error";
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
