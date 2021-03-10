export class PatientVisit{
    constructor(
        public patientid:string ="",
        public appointmentid:string="",
        public height:string="",
        public weight:string="",
        public bloodpressuresystolic:string="",
        public bloodpressurediastolic:string="",
        public bodytemperature:string = "",
        public respirationrate:string = "",
        public id:string =""        
     )
    {}

  get PatientID() { return this.patientid };
  set PatientID(address: string) { this.patientid = address };

  get AppointmentID() { return this.appointmentid };
  set AppointmentID(address: string) { this.appointmentid = address };

  get Height() { return this.height };
  set Height(address: string) { this.height = address };

  get Weight() { return this.weight };
  set Weight(address: string) { this.weight = address };

  get Bloodpressuresystolic() { return this.bloodpressuresystolic };
  set Bloodpressuresystolic(address: string) { this.bloodpressuresystolic = address };

  get Bloodpressurediastolic() { return this.bloodpressurediastolic };
  set Bloodpressurediastolic(address: string) { this.bloodpressurediastolic = address };

  get Bodytemperature() { return this.bodytemperature };
  set Bodytemperature(address: string) { this.bodytemperature = address };

  get Respirationrate() { return this.respirationrate };
  set Respirationrate(address: string) { this.respirationrate = address };

  get ID() { return this.id };
  set ID(address: string) { this.id = address };
}