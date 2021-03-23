export class Appointment{
  constructor(      
    public id: number=0,
    public drname:string="",
    public patientname:string="",
    public date:string="",
    public fromtime:string="",
    public totime:string="",
    public drid:string="",
    public patientid:string="",
    public isApproved:boolean,
    public reason:string="",
    public description:string="",    
    public drDisplayId:string="",
    public patientDisplayId:string="",
    public speciality:string=""
           )
  {
      
  }

//   get Id() { return this.id };
//   set Id(data: number) { this.id = data };

// get Drname() { return this.drname };
// set Drname(data: string) { this.drname = data };

// get Patientname() { return this.patientname };
// set Patientname(data: string) { this.patientname = data };

// get Date() { return this.date };
// set Date(data: string) { this.date = data };

// get Fromtime() { return this.fromtime };
// set Fromtime(data: string) { this.fromtime = data };

// get Totime() { return this.totime };
// set Totime(data: string) { this.totime = data };

// get Drid() { return this.drid };
// set Drid(data: string) { this.drid = data };

// get Patientid() { return this.patientid };
// set Patientid(data: string) { this.patientid = data };
}