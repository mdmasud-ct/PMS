using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class SpecialityMaster
    {
        public SpecialityMaster()
        {
            DoctorspecialityMapping = new HashSet<DoctorspecialityMapping>();
        }

        public int Id { get; set; }
        public string SpDesc { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }

        public virtual ICollection<DoctorspecialityMapping> DoctorspecialityMapping { get; set; }
    }
}
