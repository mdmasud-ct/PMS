export class PatientDemographicData{
    constructor(      
        public id: number=0,
        public race:string="",
        public ethnicity:string="",
        public languagesKnown:string="",
        public address:string="",
        public nomineeFirstName:string="",
        public nomineeLastName:string="",
        public nomineeEmail:string="",
        public nomineeRelationship:string="",
        public nomineeContact:string="",
        public nomineeAddress:string="",
        public isNeedportalAccess:boolean=false,
        public patientid:number=0
             )
    {
        
    }

    get Id() { return this.id };
    set Id(data: number) { this.id = data };

  get Race() { return this.race };
  set Race(data: string) { this.race = data };

  get Ethnicity() { return this.ethnicity };
  set Ethnicity(data: string) { this.ethnicity = data };

  get LanguagesKnown() { return this.languagesKnown };
  set LanguagesKnown(data: string) { this.languagesKnown = data };

  get Address() { return this.address };
  set Address(data: string) { this.address = data };

  get NomineeFirstName() { return this.nomineeFirstName };
  set NomineeFirstName(data: string) { this.nomineeFirstName = data };

  get NomineeLastName() { return this.nomineeLastName };
  set NomineeLastName(data: string) { this.nomineeLastName = data };

  get NomineeEmail() { return this.nomineeEmail };
  set NomineeEmail(data: string) { this.nomineeEmail = data };

  get NomineeRelationship() { return this.nomineeRelationship };
  set NomineeRelationship(data: string) { this.nomineeRelationship = data };

  get NomineeContact() { return this.nomineeContact };
  set NomineeContact(data: string) { this.nomineeContact = data };

  get NomineeAddress() { return this.nomineeAddress };
  set NomineeAddress(data: string) { this.nomineeAddress = data };

  get IsNeedportalAccess() { return this.isNeedportalAccess };
  set IsNeedportalAccess(data: boolean) { this.isNeedportalAccess = data };

  get Patientid() { return this.patientid };
    set Patientid(data: number) { this.patientid = data };

}