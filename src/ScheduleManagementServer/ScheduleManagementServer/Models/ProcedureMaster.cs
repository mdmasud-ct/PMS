using System;
using System.Collections.Generic;

#nullable disable

namespace ScheduleManagementServer.Models
{
    public partial class ProcedureMaster
    {
        public ProcedureMaster()
        {
            Procedures = new HashSet<Procedure>();
        }

        public int Id { get; set; }
        public string ProcedureCode { get; set; }
        public string ProcedureDescription { get; set; }
        public bool? ProcedureIsDepricated { get; set; }

        public virtual ICollection<Procedure> Procedures { get; set; }
    }
}
