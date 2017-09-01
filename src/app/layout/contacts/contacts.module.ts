import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
