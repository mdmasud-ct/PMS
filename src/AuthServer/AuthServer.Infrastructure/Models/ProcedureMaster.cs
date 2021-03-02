using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class ProcedureMaster
    {
        public ProcedureMaster()
        {
            Procedures = new HashSet<Procedures>();
        }

        public int Id { get; set; }
        public string ProcedureCode { get; set; }
        public string ProcedureDescription { get; set; }
        public bool? ProcedureIsDepricated { get; set; }

        public virtual ICollection<Procedures> Procedures { get; set; }
    }
}
