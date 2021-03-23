using System;
using System.Collections.Generic;

#nullable disable

namespace InboxManagementServer.Models
{
    public partial class Medication
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? AppointmentId { get; set; }
        public int? MedicationId { get; set; }

        public virtual Appointment Appointment { get; set; }
        public virtual MedicineMaster MedicationNavigation { get; set; }
    }
}
