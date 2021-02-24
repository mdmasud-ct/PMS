export class PatientAllergy{
    constructor(      
        public id: number=0,
        public allergy:string="",
        public isfatal:boolean=false,
        public patientid:number=0
     )
    {
        
    }

    get Id() { return this.id };
    set Id(data: number) { this.id = data };

  get Allergy() { return this.allergy };
  set Allergy(data: string) { this.allergy = data };

  get Isfatal() { return this.isfatal };
  set Isfatal(data: boolean) { this.isfatal = data };

  get Patientid() { return this.patientid };
  set Patientid(data: number) { this.patientid = data };
}