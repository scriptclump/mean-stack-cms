import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    UserAddRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [UserAddComponent]
})
export class UserAddModule { }
