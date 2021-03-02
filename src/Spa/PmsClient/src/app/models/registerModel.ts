export class Register{
  constructor(
      public title:string ="",
      public firstname:string="",
      public lastname:string="",
      public email:string="",
      public Date_of_Birth:string="",
      public role:string = "",
      public FullName:string ="",
      public ContactNo:string = "",
      public Address:string ="",
      public Specialties: string = "",
      public Status:string ="",
      public Blocked_Unblocked:string ="",
      public id:string ="",
      public gender:string="",     
   )
  {
      
  }

get Title() { return this.title };
set Title(address: string) { this.title = address };

get FirstName() { return this.firstname };
set FirstName(address: string) { this.firstname = address };

get LastName() { return this.lastname };
set LastName(address: string) { this.lastname = address };

get Fullname() { return this.FullName };
set Fullname(address: string) { this.FullName = address };

get Email() { return this.email };
set Email(address: string) { this.email = address };

get DOB() { return this.Date_of_Birth };
set DOB(address: string) { this.Date_of_Birth = address };

get Role() { return this.role };
set Role(address: string) { this.role = address };

get Contactno() { return this.ContactNo };
set Contactno(address: string) { this.ContactNo = address };

get Addresss() { return this.Address };
set Addresss(address: string) { this.Address = address };

get Specialtiess() { return this.Specialties };
set Specialtiess(address: string) { this.Specialties = address };

get Statuss() { return this.Status };
set Statuss(address: string) { this.Status = address };

get Blocked_unblocked() { return this.Blocked_Unblocked };
set Blocked_unblocked(address: string) { this.Blocked_Unblocked = address };

get ID() { return this.id };
set ID(address: string) { this.id = address };
}

// export class Register{
//     constructor(
//         public title:string ="",
//         public firstname:string="",
//         public lastname:string="",
//         public email:string="",
//         public dob:string="",
//         public role:string = ""        
//      )
//     {
        
//     }

  // get Title() { return this.title };
  // set Title(address: string) { this.title = address };

  // get FirstName() { return this.firstname };
  // set FirstName(address: string) { this.firstname = address };

  // get LastName() { return this.lastname };
  // set LastName(address: string) { this.lastname = address };

  // get Email() { return this.email };
  // set Email(address: string) { this.email = address };

  // get DOB() { return this.dob };
  // set DOB(address: string) { this.dob = address };

  // get Role() { return this.role };
  // set Role(address: string) { this.role = address };
// }