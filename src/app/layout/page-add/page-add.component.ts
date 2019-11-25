import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-page-add',
    templateUrl: './page-add.component.html',
    styleUrls: ['./page-add.component.scss'],
    animations: [routerTransition()]
})
export class PageAddComponent implements OnInit {
    constructor(){}
    ngOnInit() {
    }
}
