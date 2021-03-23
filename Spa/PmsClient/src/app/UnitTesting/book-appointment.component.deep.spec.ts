// import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { By } from "@angular/platform-browser";
// import { of } from "rxjs";
// import { Appointment } from "../Models/Appointment";
// import { Doctors } from "../Models/Doctor";
// import { BookAppointmentComponent } from "../scheduling/book-appointment/book-appointment.component";
// import { AppointmentService } from "../Service/appointment.service";
// import { DoctorServiceService } from "../Service/doctor-service.service";

// describe("Book Component TS methods Testing", ()=>{
//     let fixture:ComponentFixture<BookAppointmentComponent>;  
//     let docterServiceMock;
//     let appointmentServiceMock;
//     let doctorData:Doctors[]=[];
//     let appointmentData:Appointment[]=[];

//     beforeEach(()=>{
//         docterServiceMock=jasmine.createSpyObj(['GetDoctorDataById']);
//         appointmentServiceMock=jasmine.createSpyObj(['SaveAppointment']);
//         TestBed.configureTestingModule({
//             declarations:[BookAppointmentComponent],
//             schemas:[NO_ERRORS_SCHEMA],
//             providers:[
//                 { provide:DoctorServiceService, useValue:docterServiceMock },
//                 { provide:AppointmentService, useValue:appointmentServiceMock  }
//             ]        
//         }).compileComponents();

//         fixture=TestBed.createComponent<BookAppointmentComponent>(BookAppointmentComponent);
//         doctorData=[
//             {id: 1,firstname: "AB",lastname: "RF",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
//             contact: "56787654",email: "rm@gmail.com" }
//         ];
//         appointmentData=[
//             {id:1,drname:"Dr.Vivek Patil",patientname:"Patient1",date:"2021-02-18",fromtime:"16:17",
//             totime:"17:17",drid:"1",patientid:"1",isApproved:true,reason:""}
//          ]

     
//     })
    
//     //loadData()
//     it(" should load the doctor data",()=>{
//         docterServiceMock.GetDoctorDataById.and.returnValue(of(doctorData));
//         fixture.detectChanges();
//         expect(fixture.componentInstance.doctorsdata.length).toBe(1);
//     })

 
//      it(" Submitting form emits appoinment object",()=>{
//          appointmentServiceMock.SaveAppointment.and.returnValue(of(appointmentData));
//          fixture.componentInstance.drId=1;
//         fixture.componentInstance.userForm.controls["doctorname"].setValue('Doctor1');
//         fixture.componentInstance.userForm.controls["patientname"].setValue('Patient1');
//         fixture.componentInstance.userForm.controls["appointmentdate"].setValue('2021-12-11');
//         fixture.componentInstance.userForm.controls["fromtime"].setValue('12:30');
//         fixture.componentInstance.userForm.controls["totime"].setValue('13.30');
//         fixture.componentInstance.userForm.controls["spetiality"].setValue('Dytition');
//         fixture.componentInstance.SaveAppointmentData();
//         expect(fixture.componentInstance.appointmentData.drid).toEqual('1');
//         expect(fixture.componentInstance.appointmentData.patientname).toEqual('Patient1');
//     })

// })