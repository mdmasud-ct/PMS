export class PatientProcedure{
  constructor(              
      public ProcedureId:number=0,
      public procedureDescription:string="",
      public patientid:string="",
      public AppointmentId:number=0,
      public procedureCode:string=""
   )
  {}

// get Procedure() { return this.procedure };
// set Procedure(data: string) { this.procedure = data };

// get Proceduredescription() { return this.procedureDescription };
// set Proceduredescription(data: string) { this.procedureDescription = data };

// get Patientid() { return this.patientid };
// set Patientid(data: string) { this.patientid = data };

// get Appointmentid() { return this.appointmentid };
// set Appointmentid(data: string) { this.appointmentid = data };
}