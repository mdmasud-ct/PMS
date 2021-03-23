using System;
using System.Collections.Generic;

#nullable disable

namespace AuthServer.Infrastructure.Models
{
    public partial class PatientEmergencyContact
    {
        public int Id { get; set; }
        public int? PatientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Relationship { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
        public bool? AccessPatientPortal { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsActive { get; set; }

        public virtual PatientMaster Patient { get; set; }
    }
}
