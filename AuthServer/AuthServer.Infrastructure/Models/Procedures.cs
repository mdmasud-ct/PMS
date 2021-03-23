using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class Procedures
    {
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? AppointmentId { get; set; }
        public int? ProcedureId { get; set; }

        public virtual Appointment Appointment { get; set; }
        public virtual ProcedureMaster Procedure { get; set; }
    }
}
