export class Patients{
  constructor(
      public firstname:string="",
      public lastname:string="",
      public dob:string="",
      public contact:string="",
      public email:string="",
      public password:string="",        
      public fullName:string ="",
      public status:string = "" ,
      public blocked_unblocked:string = "",
      public title="",
      public gender="",
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

get FullName() { return this.fullName };
set FullName(supplierName: string) { this.fullName = supplierName };

get Status() { return this.status };
set Status(supplierName: string) { this.status = supplierName };

get Blocked_unblocked() { return this.blocked_unblocked };
set Blocked_unblocked(supplierName: string) { this.blocked_unblocked = supplierName };

get Title() { return this.title };
set Title(supplierName: string) { this.title = supplierName };

get Gender() { return this.gender };
set Gender(supplierName: string) { this.gender = supplierName };

}