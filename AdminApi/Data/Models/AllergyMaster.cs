using System;
using System.Collections.Generic;

#nullable disable

namespace AdminApi.Data.Models
{
    public partial class AllergyMaster
    {
        public AllergyMaster()
        {
            PatientAllergies = new HashSet<PatientAllergy>();
        }

        public int Id { get; set; }
        public string AllergyType { get; set; }
        public string AllergyDesc { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string AllergyName { get; set; }
        public string AllergyClinicalInformation { get; set; }

        public virtual ICollection<PatientAllergy> PatientAllergies { get; set; }
    }
}
