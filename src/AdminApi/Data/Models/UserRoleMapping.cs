using System;
using System.Collections.Generic;

#nullable disable

namespace AdminApi.Data.Models
{
    public partial class UserRoleMapping
    {
        public int Id { get; set; }
        public int? UserLoginDetailsId { get; set; }
        public int? RoleId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsActive { get; set; }

        public virtual Role Role { get; set; }
        public virtual UserLoginDetail UserLoginDetails { get; set; }
    }
}
