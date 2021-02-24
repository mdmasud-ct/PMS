export class PatientMedication{
    constructor(              
        public medication:string="",
        public dosage:string="",
        public medicationdescription:string="",
        public patientid:string=""
     )
    {}

  get Medication() { return this.medication };
  set Medication(data: string) { this.medication = data };

  get Dosage() { return this.dosage };
  set Dosage(data: string) { this.dosage = data };

  get Medicationdescription() { return this.medicationdescription };
  set Medicationdescription(data: string) { this.medicationdescription = data };

  get Patientid() { return this.patientid };
  set Patientid(data: string) { this.patientid = data };
}