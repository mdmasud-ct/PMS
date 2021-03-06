using System;
using System.Collections.Generic;

#nullable disable

namespace AdminApi.Data.Models
{
    public partial class DrugMaster
    {
        public int Id { get; set; }
        public string DrugName { get; set; }
        public string DrugGenericName { get; set; }
        public string DrugManufacturerName { get; set; }
        public string DrugForm { get; set; }
        public string DrugStrength { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
    }
}
