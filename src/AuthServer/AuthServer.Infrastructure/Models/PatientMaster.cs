
using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class PatientMaster
    {
        public PatientMaster()
        {
            Notification = new HashSet<Notification>();
            PatientAllergy = new HashSet<PatientAllergy>();
            PatientEmergencyContact = new HashSet<PatientEmergencyContact>();
            PatientVitalSigns = new HashSet<PatientVitalSigns>();
        }

        public int Id { get; set; }
        public string UserLoginDetailsId { get; set; }
        public string PatientDisplayId { get; set; }
        public string Race { get; set; }
        public string Ethnicity { get; set; }
        public string LanguagesKnown { get; set; }
        public string Address { get; set; }
        public string ContactNumber { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsActive { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public DateTime? Dob { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string Title { get; set; }
        public string PhoneNo { get; set; }
        public virtual AspNetUsers UserLoginDetails { get; set; }
        public virtual ICollection<Notification> Notification { get; set; }
        public virtual ICollection<PatientAllergy> PatientAllergy { get; set; }
        public virtual ICollection<PatientEmergencyContact> PatientEmergencyContact { get; set; }
        public virtual ICollection<PatientVitalSigns> PatientVitalSigns { get; set; }
    }
}
