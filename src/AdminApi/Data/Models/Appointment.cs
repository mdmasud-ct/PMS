using System;
using System.Collections.Generic;

#nullable disable

namespace AdminApi.Data.Models
{
    public partial class Appointment
    {
        public Appointment()
        {
            Diagnoses = new HashSet<Diagnosis>();
            Medications = new HashSet<Medication>();
            Notifications = new HashSet<Notification>();
            PatientVitalSigns = new HashSet<PatientVitalSign>();
            Procedures = new HashSet<Procedure>();
        }

        public int Id { get; set; }
        public string AppointmentTitle { get; set; }
        public string Description { get; set; }
        public int? DoctorId { get; set; }
        public DateTime? MeetingStartTime { get; set; }
        public DateTime? MeetingEndTime { get; set; }
        public string Duration { get; set; }
        public int? PatientId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsConfirmed { get; set; }
        public DateTime? RespondedOn { get; set; }
        public string Notes { get; set; }

        public virtual DoctorMaster Doctor { get; set; }
        public virtual ICollection<Diagnosis> Diagnoses { get; set; }
        public virtual ICollection<Medication> Medications { get; set; }
        public virtual ICollection<Notification> Notifications { get; set; }
        public virtual ICollection<PatientVitalSign> PatientVitalSigns { get; set; }
        public virtual ICollection<Procedure> Procedures { get; set; }
    }
}
