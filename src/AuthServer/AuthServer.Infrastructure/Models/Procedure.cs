using System;
using System.Collections.Generic;

#nullable disable

namespace AuthServer.Infrastructure.Models
{
    public partial class Procedure
    {
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? AppointmentId { get; set; }
        public int? ProcedureId { get; set; }

        public virtual Appointment Appointment { get; set; }
        public virtual ProcedureMaster ProcedureNavigation { get; set; }
    }
}
