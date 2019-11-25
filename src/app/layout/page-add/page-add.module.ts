import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { PageAddRoutingModule } from './page-add-routing.module';
import { PageAddComponent } from './page-add.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    PageAddRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [PageAddComponent]
})
export class PageAddModule { }
