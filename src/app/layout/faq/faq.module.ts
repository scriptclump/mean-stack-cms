import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from './faq.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    FAQRoutingModule,
    PageHeaderModule,
    DataTableModule
  ],
  declarations: [FAQComponent]
})
export class FAQModule { }
