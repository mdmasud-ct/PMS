using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class Notification
    {
        public int Id { get; set; }
        public int? DoctorId { get; set; }
        public int? AppointmentId { get; set; }
        public int? Snooze { get; set; }
        public string Description { get; set; }
        public int? PatientId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsVisible { get; set; }

        public virtual Appointment Appointment { get; set; }
        public virtual DoctorMaster Doctor { get; set; }
        public virtual PatientMaster Patient { get; set; }
    }
}
