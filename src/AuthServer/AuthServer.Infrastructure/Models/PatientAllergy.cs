using System;
using System.Collections.Generic;

#nullable disable

namespace AuthServer.Infrastructure.Models
{
    public partial class PatientAllergy
    {
        public int Id { get; set; }
        public int? PatientId { get; set; }
        public int? AllergyId { get; set; }
        public bool? FatalAllergy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsActive { get; set; }

        public virtual AllergyMaster Allergy { get; set; }
        public virtual PatientMaster Patient { get; set; }
    }
}
