import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAddComponent } from './page-add.component';

const routes: Routes = [
    { path: '', component: PageAddComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageAddRoutingModule { }
