using System;
using System.Collections.Generic;

#nullable disable

namespace AuthServer.Infrastructure.Models
{
    public partial class PatientMaster
    {
        public PatientMaster()
        {
            Notifications = new HashSet<Notification>();
            PatientAllergies = new HashSet<PatientAllergy>();
            PatientEmergencyContacts = new HashSet<PatientEmergencyContact>();
            PatientVitalSigns = new HashSet<PatientVitalSign>();
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
        public string Title { get; set; }
        public string City { get; set; }
        public string PhoneNo { get; set; }


        public virtual AspNetUser UserLoginDetails { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; }
        public virtual ICollection<PatientAllergy> PatientAllergies { get; set; }
        public virtual ICollection<PatientEmergencyContact> PatientEmergencyContacts { get; set; }
        public virtual ICollection<PatientVitalSign> PatientVitalSigns { get; set; }
    }
}
