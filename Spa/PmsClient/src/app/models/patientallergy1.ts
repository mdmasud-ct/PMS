export class PatientAllergy{
    constructor(              
        public allergy:string="",
        public isfatal:string="",
        public patientid:string="",
        public appointmentid:string=""
     )
    {
        
    }    

  get Allergy() { return this.allergy };
  set Allergy(data: string) { this.allergy = data };

  get Isfatal() { return this.isfatal };
  set Isfatal(data: string) { this.isfatal = data };

  get Patientid() { return this.patientid };
  set Patientid(data: string) { this.patientid = data };

  get Appointmentid() { return this.appointmentid };
  set Appointmentid(data: string) { this.appointmentid = data };
}