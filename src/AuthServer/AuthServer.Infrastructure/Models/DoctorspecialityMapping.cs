using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class DoctorspecialityMapping
    {
        public int Id { get; set; }
        public int? DoctorId { get; set; }
        public int? SpId { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public int? Experience { get; set; }
        public bool? IsActive { get; set; }

        public virtual DoctorMaster Doctor { get; set; }
        public virtual SpecialityMaster Sp { get; set; }
    }
}
