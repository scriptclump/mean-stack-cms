import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from './faq.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    FAQRoutingModule,
    PageHeaderModule
  ],
  declarations: [FAQComponent]
})
export class FAQModule { }
