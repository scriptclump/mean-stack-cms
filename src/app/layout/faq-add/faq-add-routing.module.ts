import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FAQAddComponent } from './faq-add.component';

const routes: Routes = [
    { path: '', component: FAQAddComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FAQAddRoutingModule { }
