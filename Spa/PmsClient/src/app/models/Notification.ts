export class Notification{
    constructor(
       public id:number=0,
       public userId:string="",
       public notificationText:string="",
       public isSeen:boolean=false,
       public createdDate:string=""
     )
    {
        
    }
}