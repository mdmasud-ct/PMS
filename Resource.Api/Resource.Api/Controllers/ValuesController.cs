using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Resource.Api.Controllers
{
    [Authorize(Policy = "ApiReader")]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        //[Authorize(Policy = "Consumer")] //Masud Commented
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new JsonResult(User.Claims.Select(c => new { c.Type, c.Value }));
        }
        //[HttpGet]
        //public ActionResult<string> GetRole() { 
            
        //    //var res = User.Claims.)

        //}
    }
}
