import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { BannersRoutingModule } from './banners-routing.module';
import { BannersComponent } from './banners.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    BannersRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [BannersComponent]
})
export class BannersModule { }
