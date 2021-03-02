using AuthServer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AuthServer.Infrastructure.Services
{
	public interface IRegistrationRepo
	{
		public void AddPatient(UsersModel model);
		
		public void AddDoctor(UsersModel model);
		
		public void AddNurse(UsersModel model);
		
		public void UpdateUserDetails(UsersModel model);
	}
}
