import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedWrapperComponent } from './shared-wrapper/shared-wrapper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import sharedwrapperroutes from './shared-wrapper.routes';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [SharedWrapperComponent, ToolbarComponent, LoaderComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    sharedwrapperroutes
  ]
})
export class SharedWrapperModule { }
