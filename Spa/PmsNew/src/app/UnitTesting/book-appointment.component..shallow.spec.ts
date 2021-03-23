import {TestBed,ComponentFixture } from '@angular/core/testing';
import {BookAppointmentComponent } from '../scheduling/book-appointment/book-appointment.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {AppointmentService} from '../services/appointment.service';
import { ToasterService } from '../core/ToasterService';
import { AuthService } from '../core/auth.service';
 import {HttpClientTestingModule} from '@angular/common/http/testing';
import { DoctorServiceService } from 'app/services/doctor-service.service';


describe("Book Appointment Component",()=>{
    let fixture:ComponentFixture<BookAppointmentComponent>;
    let BookAppoinmentComp:BookAppointmentComponent;
    let DoctorServiceMock;
    let AppointmentServiceMock;
    let ToasterServiceMock;
    let AuthServiceMock;

    beforeEach(()=>{
        DoctorServiceMock=jasmine.createSpyObj(['']);
        AppointmentServiceMock=jasmine.createSpyObj(['']);
        ToasterServiceMock=jasmine.createSpyObj(['']);
        AuthServiceMock=jasmine.createSpyObj(['']);
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            declarations:[BookAppointmentComponent],
            schemas:[NO_ERRORS_SCHEMA],
            providers:[
                {provide: DoctorServiceService, useValue:DoctorServiceMock},
                {provide: AppointmentService, useValue:AppointmentServiceMock},
                {provide: ToasterService, useValue:ToasterServiceMock},
                {provide: AuthService, useValue:AuthServiceMock}
            ]         
        });

      
        // BookAppoinmentComp=new BookAppointmentComponent(DoctorServiceMock,AppointmentServiceMock)
        fixture=TestBed.createComponent<BookAppointmentComponent>(BookAppointmentComponent);
    });

    it(" @input DrId must have Doctor id value",()=>{
      fixture.componentInstance.drId=101;
      expect(fixture.componentInstance.drId).toEqual(101);
    // BookAppoinmentComp.drId=101;
    // expect(BookAppoinmentComp.drId).toEqual(101);
    });

    it("form should be Invalid", ()=>{
        fixture.componentInstance.userForm.controls["doctorname"].setValue('');
        fixture.componentInstance.userForm.controls["patientname"].setValue('');
        fixture.componentInstance.userForm.controls["appointmentdate"].setValue('');
        fixture.componentInstance.userForm.controls["fromtime"].setValue('');
        fixture.componentInstance.userForm.controls["totime"].setValue('');
        fixture.componentInstance.userForm.controls["spetiality"].setValue('');
        expect(fixture.componentInstance.userForm.valid).toBeFalsy();
    })

    it("form should be valid", ()=>{
        fixture.componentInstance.userForm.controls["doctorname"].setValue('Doctor1');
        fixture.componentInstance.userForm.controls["patientname"].setValue('Patient1');
        fixture.componentInstance.userForm.controls["appointmentdate"].setValue('2021-12-11');
        fixture.componentInstance.userForm.controls["fromtime"].setValue('12:30');
        fixture.componentInstance.userForm.controls["totime"].setValue('13.30');
        fixture.componentInstance.userForm.controls["spetiality"].setValue('Dytition');
        expect(fixture.componentInstance.userForm.valid).toBeTruthy();
    })
});