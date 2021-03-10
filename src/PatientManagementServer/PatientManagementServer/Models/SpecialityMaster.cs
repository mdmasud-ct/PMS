using System;
using System.Collections.Generic;

#nullable disable

namespace PatientManagementServer.Models
{
    public partial class SpecialityMaster
    {
        public SpecialityMaster()
        {
            DoctorspecialityMappings = new HashSet<DoctorspecialityMapping>();
        }

        public int Id { get; set; }
        public string SpDesc { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public virtual ICollection<DoctorspecialityMapping> DoctorspecialityMappings { get; set; }
    }
}
