using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagementServer.Services;
using PatientManagementServer.Models;
using Microsoft.AspNetCore.Cors;

namespace PatientManagementServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[DisableCors]
    [SecurityHeaders]
    public class PatientController : ControllerBase
    {
        private IPatientRepository _patientRepository;
        public PatientController(IPatientRepository patientRepository)
        {
            this._patientRepository = patientRepository;
        }


        /// <summary>
        /// To get patient demographic data
        /// </summary>
        [HttpGet("getdemographic")]
        public IActionResult GetDemographicData(string userName)
        {
            DemographicData data = new DemographicData();
            try
            {
                ResultModel res = new ResultModel();
                if (userName == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    data = _patientRepository.GetDemographicById(userName);
                    return Ok(data);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get patient allergy data
        /// </summary>
        [HttpGet("getallergy")]
        public IActionResult GetAllergyData(string userName)
        {
            List<AllergyModel> allergyModels = new List<AllergyModel>();
            try
            {
                ResultModel res = new ResultModel();
                if (userName == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    allergyModels = _patientRepository.GetAllergyById(userName);
                    return Ok(allergyModels);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get patient data
        /// </summary>
        [HttpGet("getpatient")]
        public IActionResult GetPatientData(string userName)
        {
            PatientMaster data = new PatientMaster();
            try
            {
                ResultModel res = new ResultModel();
                if (userName == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    data = _patientRepository.GetPatientById(userName);
                    return Ok(new { firstname = data.FirstName, lastname = data.LastName, dob = data.Dob, contact = data.ContactNumber, email = data.EmailId });
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get allergy data
        /// </summary>
        [HttpGet("getallergydata")]
        public IActionResult GetAllergyData()
        {
            List<AllergyMaster> data = new List<AllergyMaster>();
            try
            {
                data = _patientRepository.GetAllergyMasterData();
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        /// <summary>
        /// To save patient demographic data
        /// </summary>
        [HttpPost("adddemographic")]
        public IActionResult AddDemographicData(string userName, DemographicData demographicData)
        {
            try
            {
                ResultModel res = new ResultModel();
                if (demographicData == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    res = _patientRepository.AddPatientDemographicData(userName, demographicData);
                    return Ok(res);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To Update patient demographic data
        /// </summary>
        [HttpPatch("updatedemographic")]
        public IActionResult UpdateDemographicData(string userName, DemographicData demographicData)
        {
            try
            {
                ResultModel res = new ResultModel();
                if (demographicData == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    res = _patientRepository.AddPatientDemographicData(userName, demographicData);
                    return Ok(res);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        /// <summary>
        /// To save patient allergy data
        /// </summary>
        [HttpPost("addallergy")]
        public IActionResult AddAllergyData(string userName, AllergyModel allergyModel)
        {
            try
            {
                ResultModel res = new ResultModel();
                if (allergyModel == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    res = _patientRepository.AddPatientAllergy(userName, allergyModel);
                    return Ok(res);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To get notification data
        /// </summary>
        [HttpGet("getnotifications")]
        public IActionResult GetNotifications(string userName)
        {
            List<NotificationModel> data = new List<NotificationModel>();
            try
            {
                if (userName == null)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    data = _patientRepository.GetNotifications(userName);
                    return Ok(data);
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        /// <summary>
        /// To save patient allergy data
        /// </summary>
        [HttpPatch("updatenotification")]
        public IActionResult UpdateNotification(int id)
        {
            try
            {
                if (id <= 0)
                {
                    return BadRequest(new Exception("Unable to fetch record"));
                }
                else
                {
                    _patientRepository.UpdateNotification(id);
                    return Ok();
                }
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
