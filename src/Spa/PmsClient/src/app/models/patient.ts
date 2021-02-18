export class Patients{
    constructor(
        public firstname:string="",
        public lastname:string="",
        public dob:string="",
        public contact:string="",
        public email:string="",
        public password:string=""
     )
    {
        
    }


  get FirstName() { return this.firstname };
  set FirstName(address: string) { this.firstname = address };

  get LastName() { return this.lastname };
  set LastName(address: string) { this.lastname = address };

  get DOB() { return this.dob };
  set DOB(address: string) { this.dob = address };

  get Contact() { return this.contact };
  set Contact(address: string) { this.contact = address };

  get Email() { return this.email };
  set Email(address: string) { this.email = address };

  get Password() { return this.password };
  set Password(supplierName: string) { this.password = supplierName };
}