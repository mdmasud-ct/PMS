export class PatientProcedure{
    constructor(              
        public procedure:string="",
        public proceduredescription:string="",
        public patientid:string=""
     )
    {}

  get Procedure() { return this.procedure };
  set Procedure(data: string) { this.procedure = data };

  get Proceduredescription() { return this.proceduredescription };
  set Proceduredescription(data: string) { this.proceduredescription = data };

  get Patientid() { return this.patientid };
  set Patientid(data: string) { this.patientid = data };
}