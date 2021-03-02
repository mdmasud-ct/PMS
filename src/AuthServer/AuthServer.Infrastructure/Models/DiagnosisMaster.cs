using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class DiagnosisMaster
    {
        public DiagnosisMaster()
        {
            Diagnosis = new HashSet<Diagnosis>();
        }

        public int Id { get; set; }
        public string DiagnosisCode { get; set; }
        public string DiagnosisDescription { get; set; }
        public string Diagnosystype { get; set; }
        public bool? DiagnosisIsDepricated { get; set; }

        public virtual ICollection<Diagnosis> Diagnosis { get; set; }
    }
}
