import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ForgotPasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotPasswordComponent } from './forgotpassword.component';

@NgModule({
    imports: [
        CommonModule,
        ForgotPasswordRoutingModule
    ],
    declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule {
}
