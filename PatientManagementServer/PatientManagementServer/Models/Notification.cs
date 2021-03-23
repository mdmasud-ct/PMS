using System;
using System.Collections.Generic;

#nullable disable

namespace PatientManagementServer.Models
{
    public partial class Notification
    {
        public int Id { get; set; }
        public int? Snooze { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string UserLoginDetailsId { get; set; }
        public bool? IsSeen { get; set; }

        public virtual AspNetUser UserLoginDetails { get; set; }
    }
}
