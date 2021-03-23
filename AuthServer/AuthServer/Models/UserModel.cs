using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthServer.Models
{
	public class UserModel
	{
		public string Email { get; set; }
		public string OldPassword { get; set; }
		public string NewPassword { get; set; }
		public string UserName { get; set; }
	}
}
