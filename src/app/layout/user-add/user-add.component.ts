import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.scss'],
    animations: [routerTransition()]
})
export class UserAddComponent implements OnInit {
    constructor(){}
    ngOnInit() {
    }
}
