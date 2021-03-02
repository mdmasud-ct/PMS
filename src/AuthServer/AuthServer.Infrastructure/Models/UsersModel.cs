using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthServer.Models
{
	public class UsersModel
	{
		public string Id { get; set; }
		
		public string Title { get; set; }
		
		public string FirstName { get; set; }	
		
		public string LastName { get; set; }	
		
		public string Email { get; set; }	
		
		public DateTime DOB { get; set; }	
		
		public string Role { get; set; }	
		
		public string PhoneNumber { get; set; }	
		
		public string Address { get; set; }	
		
		public string Speciality { get; set; }

		public string CreatedBy { get; set; }
		
		public string UpdatedBy { get; set; }
		
		public string CreatedOn { get; set; }
		
		public string UpdatedOn { get; set; }

		public string Password { get; set; }

		public string Gender{ get; set; }
	}
}
