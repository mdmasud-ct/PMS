using System;
using System.Collections.Generic;

#nullable disable

namespace PatientManagementServer.Models
{
    public partial class Medication
    {
        public int Id { get; set; }
        public string Medication1 { get; set; }
        public string Dosage { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? AppointmentId { get; set; }

        public virtual Appointment Appointment { get; set; }
    }
}
