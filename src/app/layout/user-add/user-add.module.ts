import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    UserAddRoutingModule,
    PageHeaderModule
  ],
  declarations: [UserAddComponent]
})
export class UserAddModule { }
