import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVisitDoctorComponent } from './patient-visit-doctor.component';

describe('PatientVisitDoctorComponent', () => {
  let component: PatientVisitDoctorComponent;
  let fixture: ComponentFixture<PatientVisitDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientVisitDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVisitDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
