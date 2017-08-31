import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-banner-add',
    templateUrl: './banner-add.component.html',
    styleUrls: ['./banner-add.component.scss'],
    animations: [routerTransition()]
})
export class BannerAddComponent implements OnInit {
    constructor(){}
    ngOnInit() {
    }
}
