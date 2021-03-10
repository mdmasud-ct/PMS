using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PatientManagementServer.Models;
using PatientManagementServer.Data.AppDbContext;

namespace PatientManagementServer.Services
{
    public interface IPatientRepository
    {
        List<AllergyModel> GetAllergyById(string userName);
        DemographicData GetDemographicById(string userName);
        PatientMaster GetPatientById(string userName);

        int GetAllergyId(string allergy);

        List<AllergyMaster> GetAllergyMasterData();
        ResultModel AddPatientDemographicData(string userName, DemographicData demographicData);

        ResultModel AddPatientAllergy(string userName, AllergyModel allergyModel);

        List<NotificationModel> GetNotifications(string userName);

        void UpdateNotification(int id);
    }

    public class PatientDbRepository : IPatientRepository
    {
        PMSYSTEMContext _dbContext = new PMSYSTEMContext();

        public PatientDbRepository(PMSYSTEMContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public DemographicData GetDemographicById(string userName)
        {
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            int patientId = _dbContext.PatientMasters.Where(x => x.UserLoginDetailsId == user.Id).SingleOrDefault().Id;
            PatientMaster patientMaster = _dbContext.PatientMasters.SingleOrDefault(x => x.Id == patientId);
            PatientEmergencyContact patientEmergencyContact = _dbContext.PatientEmergencyContacts.SingleOrDefault(x => x.PatientId == patientId);
            DemographicData data = new DemographicData();
            if (patientEmergencyContact != null)
            {
                data = new DemographicData
                {
                    id = patientEmergencyContact.Id,
                    patientid = patientMaster.Id,
                    race = patientMaster.Race,
                    ethnicity = patientMaster.Ethnicity,
                    languagesKnown = patientMaster.LanguagesKnown,
                    address = patientMaster.Address,
                    nomineeFirstName = patientEmergencyContact.FirstName,
                    nomineeLastName = patientEmergencyContact.LastName,
                    nomineeAddress = patientEmergencyContact.Address,
                    nomineeEmail = patientEmergencyContact.Email,
                    nomineeContact = patientEmergencyContact.ContactNumber,
                    nomineeRelationship = patientEmergencyContact.Relationship,
                    isNeedportalAccess = patientEmergencyContact.AccessPatientPortal
                };
            }
            return data;
        }
        public List<AllergyModel> GetAllergyById(string userName)
        {
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            int patientId = _dbContext.PatientMasters.Where(x => x.UserLoginDetailsId == user.Id).SingleOrDefault().Id;
            //List<PatientAllergy> patientAllergies = new List<PatientAllergy>();
            List<AllergyModel> allergyModels = new List<AllergyModel>();
            AllergyModel model;
            //patientAllergies = _dbContext.PatientAllergies.Where(x => x.PatientId == patientId).ToList();
            var data = (from a in _dbContext.AllergyMasters
                        join b in _dbContext.PatientAllergies
                        on new { cond1 = a.Id.ToString() } equals new { cond1 = b.AllergyId.ToString() }
                        where b.PatientId == patientId
                        select new
                        {
                            id = a.Id,
                            allergy=a.AllergyName,
                            isfatal=b.FatalAllergy,
                            patientid=b.PatientId
                        }).ToList();

            int i = 1;
            foreach (var item in data)
            {
                model = new AllergyModel
                {
                    id = i++,
                    allergy = item.allergy,
                    isfatal = Convert.ToBoolean(item.isfatal),
                    patientid = Convert.ToInt32(item.patientid)
                };
                allergyModels.Add(model);
            }
            return allergyModels;
        }

        public List<AllergyMaster> GetAllergyMasterData()
        {
            List<AllergyMaster> allergyMaster = _dbContext.AllergyMasters.ToList();
            return allergyMaster;
        }
        public PatientMaster GetPatientById(string userName)
        {
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            PatientMaster patientMaster = _dbContext.PatientMasters.SingleOrDefault(x => x.UserLoginDetailsId == user.Id);
            return patientMaster;
        }

        public ResultModel AddPatientDemographicData(string userName, DemographicData demographicData)
        {
            ResultModel rs = new ResultModel();
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            PatientMaster patientMaster = _dbContext.PatientMasters.SingleOrDefault(x => x.UserLoginDetailsId == user.Id);
            if (patientMaster != null)
            {
                patientMaster.Race = demographicData.race;
                patientMaster.Ethnicity = demographicData.ethnicity;
                patientMaster.Address = demographicData.address;
                patientMaster.LanguagesKnown = demographicData.languagesKnown;
                patientMaster.ModifiedOn = DateTime.Now;
                _dbContext.SaveChanges();
                rs.Code = 1;
            }
            PatientEmergencyContact patientEmergencyContact = _dbContext.PatientEmergencyContacts.SingleOrDefault(x => x.PatientId == patientMaster.Id);
            if (patientEmergencyContact == null)
            {
                PatientEmergencyContact patientEmergencyContact1 = new PatientEmergencyContact
                {
                    FirstName = demographicData.nomineeFirstName,
                    LastName = demographicData.nomineeLastName,
                    Email = demographicData.nomineeEmail,
                    Relationship = demographicData.nomineeRelationship,
                    ContactNumber = demographicData.nomineeContact,
                    PatientId = patientMaster.Id,
                    Address=demographicData.nomineeAddress,
                    AccessPatientPortal = demographicData.isNeedportalAccess,
                    CreatedOn = DateTime.Now,
                    ModifiedOn = DateTime.Now,
                    IsActive = true
                };
                _dbContext.PatientEmergencyContacts.Add(patientEmergencyContact1);
                _dbContext.SaveChanges();
                rs.Code = 1;
                rs.Response = "Demographic data saved successfully";
            }
            else
            {
                patientEmergencyContact.FirstName = demographicData.nomineeFirstName;
                patientEmergencyContact.LastName = demographicData.nomineeLastName;
                patientEmergencyContact.Email = demographicData.nomineeEmail;
                patientEmergencyContact.Relationship = demographicData.nomineeRelationship;
                patientEmergencyContact.ContactNumber = demographicData.nomineeContact;
                patientEmergencyContact.PatientId = patientMaster.Id;
                patientEmergencyContact.Address = demographicData.nomineeAddress;
                patientEmergencyContact.AccessPatientPortal = demographicData.isNeedportalAccess;
                patientEmergencyContact.ModifiedOn = DateTime.Now;
                patientEmergencyContact.IsActive = true;
                _dbContext.SaveChanges();
                rs.Code = 1;
                rs.Response = "Demographic data saved successfully";
            }
            return rs;
        }


        public ResultModel AddPatientAllergy(string userName, AllergyModel allergyModel)
        {
            ResultModel rs = new ResultModel();
            //var patientId = from a in _dbContext.UserLoginDetails //.Where(x => x.Username == userName)
            //                join b in _dbContext.PatientMasters
            //                on new { cond1 = a.Id.ToString() } equals new { cond1 = b.UserLoginDetailsId } into lg
            //                from p in lg.DefaultIfEmpty()
            //                select new { Id = p.Id };

            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            int patientId = _dbContext.PatientMasters.Where(x => x.UserLoginDetailsId == user.Id).SingleOrDefault().Id;

            PatientAllergy allergy = new PatientAllergy
            {
                PatientId = patientId,
                AllergyId = GetAllergyId(allergyModel.allergy),
                FatalAllergy = allergyModel.isfatal,
                CreatedOn = DateTime.Now,
                ModifiedOn = DateTime.Now,
                IsActive = true
            };
            _dbContext.PatientAllergies.Add(allergy);
            _dbContext.SaveChanges();
            rs.Code = 1;
            rs.Response = "Allergy data saved successfully";
            return rs;
        }

        public int GetAllergyId(string allergy)
        {
            int allergyId = _dbContext.AllergyMasters.Where(x => x.AllergyName == allergy).SingleOrDefault().Id;
            return allergyId;
        }

        public List<NotificationModel> GetNotifications(string userName)
        {
            AspNetUser user = _dbContext.AspNetUsers.SingleOrDefault(x => x.UserName == userName);
            List<Notification> notificationsDbData = _dbContext.Notifications.Where(x => x.UserLoginDetailsId == user.Id && x.IsSeen==false).ToList();
            List<NotificationModel> notifications = new List<NotificationModel>();
            NotificationModel data;
            foreach (var item in notificationsDbData)
            {
                data = new NotificationModel
                {
                    id = item.Id,
                    notificationText = item.Description,
                    userId = item.UserLoginDetailsId,
                    createdDate = item.CreatedOn.ToString(),
                    isSeen=Convert.ToBoolean(item.IsSeen)
                };
                notifications.Add(data);
            }
            return notifications;
        }

        public void UpdateNotification(int id)
        {
            Notification notification = _dbContext.Notifications.Where(x => x.Id == id).SingleOrDefault();
            if(notification !=null)
            {
                notification.IsSeen = true;
                _dbContext.SaveChanges();
            }
        }
    }

}
