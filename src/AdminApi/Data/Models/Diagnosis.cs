using System;
using System.Collections.Generic;

#nullable disable

namespace AdminApi.Data.Models
{
    public partial class Diagnosis
    {
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? AppointmentId { get; set; }
        public int? DiagnosisId { get; set; }

        public virtual Appointment Appointment { get; set; }
        public virtual DiagnosisMaster DiagnosisNavigation { get; set; }
    }
}
