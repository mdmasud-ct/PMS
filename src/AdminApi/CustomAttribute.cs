using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminApi
{
	[AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, Inherited = true, AllowMultiple = false)]
	public class CustomAttribute: AuthorizeAttribute
	{
		private readonly string[] allowedRoles;
		public string AllowedRoles { get; set; }
		public CustomAttribute(params string[] roles)
		{
			if (!string.IsNullOrEmpty(Roles))
			{
				this.allowedRoles = Roles.Split(',');
			}
			this.allowedRoles = roles;
		}
	}
}
