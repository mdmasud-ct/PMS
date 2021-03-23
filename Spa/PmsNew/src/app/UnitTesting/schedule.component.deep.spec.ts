import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ScheduleComponent } from "../scheduling/schedule/schedule.component";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DoctorServiceService } from "../services/doctor-service.service";
import { of } from "rxjs";
import { Doctors } from "../Models/Doctor";
import { By } from "@angular/platform-browser";

describe("Schedule component Test",()=>{
  let fixture:ComponentFixture<ScheduleComponent>;  
    let docterServiceMock;
    let docterServiceMock1;
    let doctorData:Doctors[]=[];
    let doctorData1:Doctors[]=[];
    let City: string[];

    beforeEach(()=>{
        docterServiceMock=jasmine.createSpyObj(['GetAllDoctors','GetFilteredDoctors']);
        // docterServiceMock1=jasmine.createSpyObj(['GetFilteredDoctors']);
        TestBed.configureTestingModule({
            declarations:[ScheduleComponent],
            schemas:[NO_ERRORS_SCHEMA],
            providers:[
                {
                    provide:DoctorServiceService,useValue:docterServiceMock
                }
                // ,{
                //     provide:DoctorServiceService,useValue:docterServiceMock1
                // }
            ]
        })

        fixture=TestBed.createComponent<ScheduleComponent>(ScheduleComponent);
         doctorData=[
        {id: 1,firstname: "AB",lastname: "RF",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
        contact: "56787654",email: "rm@gmail.com" },
       {id: 2,firstname: "RG",lastname: "FG",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
        contact: "56787654",email: "rm@gmail.com" },
       {id: 3,firstname: "BG",lastname: "RT",gender: "Male",dob: "1989-10-11",speciality: "dentist",city: "Thane",
        contact: "56787654",email: "rm@gmail.com" }
    ]

    })

    //GetAllDoctor()
    it("GetAllDoctor() must return the array of Doctor data",()=>{
        debugger;
        docterServiceMock.GetAllDoctors.and.returnValue(of(doctorData));
        fixture.detectChanges();
        expect(fixture.componentInstance.doctorsdata.length).toBe(3);
    })

    //GetFilterData()
    // it("GetFilterData() must return the array of Doctor data",()=>{
    //     debugger;
    //     // docterServiceMock.GetAllDoctors.and.returnValue(of(doctorData));
    //     docterServiceMock.GetFilteredDoctors.and.returnValue(of(doctorData1));
    //     fixture.componentInstance.GetFilteredDoctors();
    //     fixture.detectChanges();
    //     expect(fixture.componentInstance.doctorsdata.length).toBe(1);
    // })
 

})