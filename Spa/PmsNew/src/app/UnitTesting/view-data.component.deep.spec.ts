import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PatientAllergy } from "../Models/PatientAllergy";
import { PatientDemographicData } from "../Models/PatientDemographicData";
import { ViewDataComponent } from "../patient/view-data/view-data.component";
import { PatientService } from "../services/patient.service";
import { ToasterService } from '../core/ToasterService';
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../core/auth.service";


describe("View Patient Appoinment Shallow Test",()=>{
    let fixture:ComponentFixture<ViewDataComponent>
    let patientServiceMock;
    let dataSourceAllergyData: PatientAllergy[]= [];
    let demographicData: PatientDemographicData[]= [];
    let ToasterServiceMock;
    let AuthServiceMock;
    let patientData:any;

    beforeEach(()=>{
        patientServiceMock=jasmine.createSpyObj(['GetPatientDataByID','GetPatientAllergyDataByID','GetPatientDemographicDataByID','SaveDemographicData','SaveAllergyData'])
        ToasterServiceMock=jasmine.createSpyObj(['success','error']);
        AuthServiceMock=jasmine.createSpyObj(['']);
        TestBed.configureTestingModule({
            declarations:[ViewDataComponent],
            schemas:[NO_ERRORS_SCHEMA],   
            providers:[
                {provide: PatientService, useValue:patientServiceMock},               
                {provide: ToasterService, useValue:ToasterServiceMock},
                {provide: AuthService, useValue:AuthServiceMock}
            ]     
        });

        fixture=TestBed.createComponent<ViewDataComponent>(ViewDataComponent);
        demographicData=[
            {id: 2,race: "Race1",ethnicity: "Ethinicity1",languagesKnown: "French,Hindi,German",
      address: "132, My Street, Kingston, New York 12401",nomineeFirstName: "vivek",
      nomineeLastName: "patil", nomineeEmail: "vp@gmail.com", nomineeRelationship: "Brother",
      nomineeContact: "56787654",nomineeAddress: "132, My Street, Kingston, New York 12401",
      isNeedportalAccess: true,patientid: 1}
        ]

        dataSourceAllergyData=[
            {id: 1,allergy: "ABC",isfatal: false,patientid: 1},
        ]

        patientData={patientfirstname: "firstname",patientlastname: "lastname",patientdob: "dob",
        patientcontact: "contact",patientemail: "email"}

        
       patientServiceMock.GetPatientAllergyDataByID.and.returnValue(of(dataSourceAllergyData));
    })

    // it(" load loadPatientData()",()=>{
    //     debugger;
    //     patientServiceMock.GetPatientDataByID.and.returnValue(of(patientData));
    //     fixture.componentInstance.loadPatientData();
    //     // console.log("todays log "+fixture.componentInstance.userForm.value.patientfirstname);
    //     // expect(fixture.componentInstance.userForm.value.patientfirstname).toEqual("firstname");
    // })

    it(" load GetPatientDemographicDataByID()",()=>{
        debugger;
        patientServiceMock.GetPatientDemographicDataByID.and.returnValue(of(demographicData));
        fixture.componentInstance.loadDemographicData();
        console.log(fixture.componentInstance.demographicData);
        expect(fixture.componentInstance.demographicData.length).toBe(1);
    })

    it(" load GetPatientAllergyDataByID()",()=>{
        debugger;
        patientServiceMock.GetPatientAllergyDataByID.and.returnValue(of(dataSourceAllergyData));
        fixture.componentInstance.GetPatientAllergyData();
        expect(fixture.componentInstance.dataSourceAllergyData.length).toBe(1);
    })

    it("form should be Invalid", ()=>{
        fixture.componentInstance.userForm.controls["race"].setValue('');
        fixture.componentInstance.userForm.controls["ethnicity"].setValue('');
        fixture.componentInstance.userForm.controls["address"].setValue('');
        fixture.componentInstance.userForm.controls["nomineeFirstName"].setValue('');
        fixture.componentInstance.userForm.controls["nomineeLastName"].setValue('');
        fixture.componentInstance.userForm.controls["nomineeEmail"].setValue('');
        fixture.componentInstance.userForm.controls["nomineeRelationship"].setValue('');
        fixture.componentInstance.userForm.controls["nomineeContact"].setValue('');
        fixture.componentInstance.userForm.controls["nomineeAddress"].setValue('');
        fixture.componentInstance.userForm.controls["portalaccess"].setValue('');
        fixture.componentInstance.userForm.controls["sameasabove"].setValue('');
        expect(fixture.componentInstance.userForm.valid).toBeFalsy();
    })

    it("form should be valid", ()=>{
        fixture.componentInstance.userForm.controls["race"].setValue('Race1');
        fixture.componentInstance.userForm.controls["ethnicity"].setValue('Ethinicity1');
        fixture.componentInstance.userForm.controls["address"].setValue('132, My Street, Kingston, New York 12401');
        fixture.componentInstance.userForm.controls["nomineeFirstName"].setValue('vivek');
        fixture.componentInstance.userForm.controls["nomineeLastName"].setValue('patil');
        fixture.componentInstance.userForm.controls["nomineeEmail"].setValue('vp@gmail.com');
        fixture.componentInstance.userForm.controls["nomineeRelationship"].setValue('Brother');
        fixture.componentInstance.userForm.controls["nomineeContact"].setValue('56787654');
        fixture.componentInstance.userForm.controls["nomineeAddress"].setValue('132, My Street, Kingston, New York 12401');
        fixture.componentInstance.userForm.controls["portalaccess"].setValue('');
        fixture.componentInstance.userForm.controls["sameasabove"].setValue('');
        expect(fixture.componentInstance.userForm.valid).toBeTruthy();
    })

    it(" Submitting form emits PatientDemographic object to save",()=>{
       patientServiceMock.SaveDemographicData.and.returnValue(of(demographicData));
       ToasterServiceMock.success.and.callThrough();
       ToasterServiceMock.error.and.callThrough();
       fixture.componentInstance.langSelect="English,Hindi";
       fixture.componentInstance.userForm.controls["race"].setValue('Race1');
       fixture.componentInstance.userForm.controls["ethnicity"].setValue('Ethinicity1');
       fixture.componentInstance.userForm.controls["address"].setValue('132, My Street, Kingston, New York 12401');
       fixture.componentInstance.userForm.controls["nomineeFirstName"].setValue('vivek');
       fixture.componentInstance.userForm.controls["nomineeLastName"].setValue('patil');
       fixture.componentInstance.userForm.controls["nomineeEmail"].setValue('vp@gmail.com');
       fixture.componentInstance.userForm.controls["nomineeRelationship"].setValue('Brother');
       fixture.componentInstance.userForm.controls["nomineeContact"].setValue('56787654');
       fixture.componentInstance.userForm.controls["nomineeAddress"].setValue('132, My Street, Kingston, New York 12401');
       fixture.componentInstance.userForm.controls["portalaccess"].setValue('');
       fixture.componentInstance.userForm.controls["sameasabove"].setValue('');
       fixture.componentInstance.SavePatientDemographicData()
       console.log(fixture.componentInstance.patientDemographicData);
       expect(fixture.componentInstance.patientDemographicData.nomineeFirstName).toEqual('vivek');
       expect(fixture.componentInstance.patientDemographicData.nomineeLastName).toEqual('patil');
   })

   it(" Submitting form emits Allergy object to save",()=>{
       patientServiceMock.SaveAllergyData.and.returnValue(of(dataSourceAllergyData));
       fixture.componentInstance.isFatal=true;
       fixture.componentInstance.SavePatientAllergy("Dust");
       console.log(fixture.componentInstance.patientAllergyData);
       expect(fixture.componentInstance.patientAllergyData.allergy).toEqual('Dust');
   })

})

