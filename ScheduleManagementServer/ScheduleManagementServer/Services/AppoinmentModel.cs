using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScheduleManagementServer.Services
{
    public class AppoinmentModel
    {
        public int id { get; set; }
        public string drname { get; set; }
        public string patientname { get; set; }
        public string date { get; set; }
        public string fromtime { get; set; }
        public string totime { get; set; }
        public string drid { get; set; }
        public string patientid { get; set; }
        public Boolean isApproved { get; set; }
        public string reason { get; set; }
        public string description { get; set; }
        public string speciality { get; set; }
    }
}
