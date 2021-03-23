using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class UserLoginDetails
    {
        public UserLoginDetails()
        {
            UserRoleMapping = new HashSet<UserRoleMapping>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsActive { get; set; }
        public int? LoginAttempt { get; set; }
        public bool? IsLocked { get; set; }

        public virtual ICollection<UserRoleMapping> UserRoleMapping { get; set; }
    }
}
