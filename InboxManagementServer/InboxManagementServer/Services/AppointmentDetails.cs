using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InboxManagementServer.Services
{
    public class AppointmentDetails
    {
        public int id { get; set; }
        public string patientId { get; set; }
        public string patientName { get; set; }
        public string date { get; set; }
        public string startTime { get; set; }
        public string endTime { get; set; }
        public string description { get; set; }
        public string status { get; set; }
        public string reason { get; set; }
    }
}
