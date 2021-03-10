using System;
using System.Collections.Generic;

namespace AuthServer.Infrastructure.Models
{
    public partial class NurseMaster
    {
        public int Id { get; set; }
        public string UserLoginDetailsId { get; set; }
        public string NurseDisplayId { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public bool? IsActive { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public DateTime? Dob { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public string City { get; set; }
        public string Title { get; set; }
        public string Address { get; set; }
        public string PhoneNo { get; set; }

        public virtual AspNetUsers UserLoginDetails { get; set; }
    }
}
