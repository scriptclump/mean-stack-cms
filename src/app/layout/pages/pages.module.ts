import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
