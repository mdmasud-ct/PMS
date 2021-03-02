using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class Appointment
    {
        public Appointment()
        {
            Diagnosis = new HashSet<Diagnosis>();
            Medication = new HashSet<Medication>();
            Notification = new HashSet<Notification>();
            PatientVitalSigns = new HashSet<PatientVitalSigns>();
            Procedures = new HashSet<Procedures>();
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
        public virtual ICollection<Diagnosis> Diagnosis { get; set; }
        public virtual ICollection<Medication> Medication { get; set; }
        public virtual ICollection<Notification> Notification { get; set; }
        public virtual ICollection<PatientVitalSigns> PatientVitalSigns { get; set; }
        public virtual ICollection<Procedures> Procedures { get; set; }
    }
}
