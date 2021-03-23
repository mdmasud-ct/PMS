using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InboxManagementServer.Services
{
    public class CalendarNotification
    {
        public int id { get; set; }
        public string title { get; set; }
        public string date { get; set; }
        public string textColor { get; set; }
        public string backgroundColor { get; set; }
        public string start { get; set; }
        public string end { get; set; }

    }
}
