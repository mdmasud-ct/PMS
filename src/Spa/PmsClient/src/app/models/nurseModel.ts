export class Nurse{
    constructor(
        public id: number =0,
        public Title: string,
        public Firstname: string,
        public Lastname: string,
        public FullName:string ="",
        public Date_of_Birth:string="",
        public EmailID:string="",
        public ContactNo:number=0,
        public Address:string="",
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