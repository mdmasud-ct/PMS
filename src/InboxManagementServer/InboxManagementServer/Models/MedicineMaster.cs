using System;
using System.Collections.Generic;

#nullable disable

namespace InboxManagementServer.Models
{
    public partial class MedicineMaster
    {
        public MedicineMaster()
        {
            Medications = new HashSet<Medication>();
        }

        public int Id { get; set; }
        public string MedicineStrength { get; set; }
        public bool? MedicineIsDeprecated { get; set; }

        public virtual ICollection<Medication> Medications { get; set; }
    }
}
