using System;
using System.Collections.Generic;

#nullable disable

namespace PatientManagementServer.Models
{
    public partial class DiagnosisMaster
    {
        public DiagnosisMaster()
        {
            Diagnoses = new HashSet<Diagnosis>();
        }

        public int Id { get; set; }
        public string DiagnosisCode { get; set; }
        public string DiagnosisDescription { get; set; }
        public string Diagnosystype { get; set; }
        public bool? DiagnosisIsDepricated { get; set; }

        public virtual ICollection<Diagnosis> Diagnoses { get; set; }
    }
}
