export class PatientDiagnosis{
  constructor(              
      public DiagnosisId:number=0,
      public diagnosisDescription:string="",
      public patientid:string="",
      public AppointmentId:number=0,
      public diagnosisCode:string =""
   )
  {}

// get Diagnosis() { return this.diagnosis };
// set Diagnosis(data: string) { this.diagnosis = data };

// get Diagnosisdescription() { return this.diagnosisDescription };
// set Diagnosisdescription(data: string) { this.diagnosisDescription = data };

// get Patientid() { return this.patientid };
// set Patientid(data: string) { this.patientid = data };

// get Appointmentid() { return this.appointmentid };
// set Appointmentid(data: string) { this.appointmentid = data };
}