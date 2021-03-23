export class PatientAllergy{
  constructor(              
      public allergyid:number=0,
      public fatalAllergy:boolean=false,
      public patientid:number = 0,    
      public allergyName:string = "",            
   )
  {
      
  }    
// get Allergy() { return this.allergy };
// set Allergy(data: string) { this.allergy = data };

// get Isfatal() { return this.isfatal };
// set Isfatal(data: boolean) { this.isfatal = data };

// get Patientid() { return this.patientid };
// set Patientid(data: string) { this.patientid = data };  
}