// import { fakeAsync, inject, TestBed, tick } from "@angular/core/testing";
// import { Router } from "@angular/router";
// import { RouterTestingModule } from "@angular/router/testing";
// import { ViewDataComponent } from "../patient/view-data/view-data.component";
// import { BookAppointmentComponent } from "../scheduling/book-appointment/book-appointment.component";
// import { ScheduleComponent } from "../scheduling/schedule/schedule.component";
// import routes from '../shared-wrapper/shared-wrapper.routes'
// import { SharedWrapperComponent } from "../shared-wrapper/shared-wrapper/shared-wrapper.component";

// describe("Testing Shared Component Routes",()=>{

//     let location:Location;
//     let router:Router;
//     let fixture;

//     beforeEach(()=>{
//         TestBed.configureTestingModule({
//             imports:[RouterTestingModule.withRoutes([]),routes],
//             declarations:[ViewDataComponent,BookAppointmentComponent,ScheduleComponent]
//         })

//         router=TestBed.inject(Router);
//         location=TestBed.inject(Location);
//         fixture=TestBed.createComponent<SharedWrapperComponent>(SharedWrapperComponent);
//         router.initialNavigation();
//     })

//     it("It Should navigate to /viewpatientdata", fakeAsync(()=>{
//             router.initialNavigation();
//     router.navigate(['viewpatientdata']);
//     tick();
//     expect(location.pathname).toBe('/viewpatientdata')    
//     }))
// })