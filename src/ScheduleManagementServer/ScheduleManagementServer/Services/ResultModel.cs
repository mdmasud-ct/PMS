using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleManagementServer.Services
{
    public class ResultModel
    {
        public int Code { get; set; }//1:Success, 2:Info, 3:Warning, 4:Error
        public string Response { get; set; }
    }
}
