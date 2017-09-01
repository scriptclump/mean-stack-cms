import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.scss'],
    animations: [routerTransition()]
})
export class ForgotPasswordComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit() {
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

}
