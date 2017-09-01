import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    PageHeaderModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
