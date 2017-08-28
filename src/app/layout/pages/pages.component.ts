import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
    animations: [routerTransition()]
})
export class PagesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
