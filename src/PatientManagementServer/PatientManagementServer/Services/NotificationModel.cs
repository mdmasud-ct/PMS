using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagementServer.Services
{
    public class NotificationModel
    {
       public int id { get; set; }
       public string userId { get; set; }
        public string notificationText { get; set; }
        public Boolean isSeen { get; set; }
        public string createdDate { get; set; }
    }
}
