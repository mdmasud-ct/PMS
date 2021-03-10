using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagementServer.Services
{
    public class DemographicData
    {
        public int id { get; set; }
        public string race { get; set; }
        public string ethnicity { get; set; }
        public string languagesKnown { get; set; }
        public string address { get; set; }
        public string nomineeFirstName { get; set; }
        public string nomineeLastName { get; set; }
        public string nomineeRelationship { get; set; }
        public string nomineeEmail { get; set; }
        public string nomineeContact { get; set; }
        public string nomineeAddress { get; set; }
        public bool? isNeedportalAccess { get; set; }
        public int patientid { get; set; }
    }
}
