export class PatientDiagnosis{
    constructor(              
        public diagnosis:string="",
        public diagnosisdescription:string="",
        public patientid:string="",
        public appointmentid:string=""
     )
    {}

  get Diagnosis() { return this.diagnosis };
  set Diagnosis(data: string) { this.diagnosis = data };

  get Diagnosisdescription() { return this.diagnosisdescription };
  set Diagnosisdescription(data: string) { this.diagnosisdescription = data };

  get Patientid() { return this.patientid };
  set Patientid(data: string) { this.patientid = data };

  get Appointmentid() { return this.appointmentid };
  set Appointmentid(data: string) { this.appointmentid = data };
}