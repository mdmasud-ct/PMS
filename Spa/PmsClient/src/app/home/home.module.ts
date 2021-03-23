import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [IndexComponent,HeaderComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
