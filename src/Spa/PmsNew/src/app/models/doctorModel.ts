export class Doctor{
    constructor(
        public id: number =0,
        public title: string,
        public firstname: string,
        public lastname: string,
        public FullName:string ="",
        public Dob:string="",
        public Email:string="",
        public ContactNo:number=0,
        public Address:string="",
        public Specialties:string = "" ,
        public Status:string = "" ,        
        public Blocked_Unblocked:string = ""
     )
    {
    }
        // get NurseID() { return this.NurseID };
        // set NurseID(address: string) { this.NurseID = address };

        // get FirstName() { return this.FullName };
        // set FirstName(address: string) { this.FullName = address };

        // get Email() { return this.email };
        // set Email(address: string) { this.email = address };

        // get DOB() { return this.dob };
        // set DOB(address: string) { this.dob = address };

        // get Role() { return this.role };
        // set Role(address: string) { this.role = address };
        }
