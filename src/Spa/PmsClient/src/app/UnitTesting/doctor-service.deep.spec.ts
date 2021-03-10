// import { inject, TestBed } from "@angular/core/testing";
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import { DoctorServiceService } from "../Service/doctor-service.service";

// describe("Test Doctor Service",()=>{
// //  let doctorServicesvc:DoctorServiceService;
// //  let httpClientMock;
// //  let doctorData=[];

//     beforeEach(()=>{
// TestBed.configureTestingModule({
//     imports:[HttpClientTestingModule],
//     providers:[DoctorServiceService]
// });

//     // doctorServicesvc=TestBed.inject(DoctorServiceService);
//     // httpClientMock=TestBed.inject(HttpTestingController);
//     // doctorData=[
//     //     {id: 1,firstname: "AB",lastname: "RF",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
//     //     contact: "56787654",email: "rm@gmail.com" },
//     // {id: 2,firstname: "RG",lastname: "FG",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
//     //     contact: "56787654",email: "rm@gmail.com" },
//     // {id: 3,firstname: "BG",lastname: "RT",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
//     //     contact: "56787654",email: "rm@gmail.com" }
//     // ]
//     });

//     //For GetDoctorDataById()
//     it("Should call GetDoctorDataById() method with correct url"
//                   ,inject([DoctorServiceService,HttpTestingController],
//                     (doctorServicesvc:DoctorServiceService,httpClientMock:HttpTestingController)=>{
//     doctorServicesvc.GetDoctorDataById(1).subscribe();
//     let request=httpClientMock.expectOne('http://localhost:3000/Doctor?id=1');    
//     httpClientMock.verify();
//     }));

//     //For GetAllDoctors()
//     it("Should call GetAllDoctors() method with correct url"
//     ,inject([DoctorServiceService,HttpTestingController],
//       (doctorServicesvc:DoctorServiceService,httpClientMock:HttpTestingController)=>{
// doctorServicesvc.GetAllDoctors().subscribe();
// let request=httpClientMock.expectOne('http://localhost:3000/Doctor');
// httpClientMock.verify();
// }));

// //GetFilteredDoctors()
// it("Should call GetFilteredDoctors() method with correct url"
// ,inject([DoctorServiceService,HttpTestingController],
//   (doctorServicesvc:DoctorServiceService,httpClientMock:HttpTestingController)=>{
// doctorServicesvc.GetFilteredDoctors("id=1&gender=Male").subscribe();
// let request=httpClientMock.expectOne('http://localhost:3000/Doctor?id=1&gender=Male');
// httpClientMock.verify();
// }));
// });