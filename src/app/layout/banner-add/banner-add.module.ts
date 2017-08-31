import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { BannerAddRoutingModule } from './banner-add-routing.module';
import { BannerAddComponent } from './banner-add.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    BannerAddRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [BannerAddComponent]
})
export class BannerAddModule { }
