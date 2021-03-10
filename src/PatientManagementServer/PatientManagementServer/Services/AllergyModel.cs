using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientManagementServer.Services
{
    public class AllergyModel
    {
        public int id { get; set; }
        public string allergy { get; set; }
        public bool isfatal { get; set; }
        public int patientid { get; set; }

    }
}
