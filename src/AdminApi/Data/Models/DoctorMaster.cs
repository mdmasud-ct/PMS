using System;
using System.Collections.Generic;

#nullable disable

namespace AdminApi.Data.Models
{
    public partial class DoctorMaster
    {
        public DoctorMaster()
        {
            Appointments = new HashSet<Appointment>();
            DoctorspecialityMappings = new HashSet<DoctorspecialityMapping>();
            Notifications = new HashSet<Notification>();
        }

        public int Id { get; set; }
        public string UserLoginDetailsId { get; set; }
        public string DoctorDisplayId { get; set; }
        public string CreatedBy { get; set; }
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

        public virtual AspNetUser UserLoginDetails { get; set; }
        public virtual ICollection<Appointment> Appointments { get; set; }
        public virtual ICollection<DoctorspecialityMapping> DoctorspecialityMappings { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; }
    }
}
