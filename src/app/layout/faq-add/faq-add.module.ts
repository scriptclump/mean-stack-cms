import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing datatable


import { FAQAddRoutingModule } from './faq-add-routing.module';
import { FAQAddComponent } from './faq-add.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    FAQAddRoutingModule,
    PageHeaderModule
  ],
  declarations: [FAQAddComponent]
})
export class FAQAddModule { }
