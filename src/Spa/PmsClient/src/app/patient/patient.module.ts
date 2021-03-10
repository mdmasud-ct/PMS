import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDataComponent } from './view-data/view-data.component';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {SelectAutocompleteModule} from 'mat-select-autocomplete';


@NgModule({
  declarations: [ViewDataComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SelectAutocompleteModule
  ]
})
export class PatientModule { }
