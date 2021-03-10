using System;
using System.Collections.Generic;

#nullable disable

namespace PatientManagementServer.Models
{
    public partial class PatientVitalSign
    {
        public int Id { get; set; }
        public int? PatientId { get; set; }
        public decimal? Height { get; set; }
        public decimal? Weight { get; set; }
        public int? BloodPressureSystolic { get; set; }
        public int? BloodPressureDiastolic { get; set; }
        public decimal? BodyTemperature { get; set; }
        public int? RespirationRate { get; set; }
        public int? AppointmentId { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public virtual Appointment Appointment { get; set; }
        public virtual PatientMaster Patient { get; set; }
    }
}
