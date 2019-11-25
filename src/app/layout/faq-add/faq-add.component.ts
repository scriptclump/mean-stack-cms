import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-faq-add',
    templateUrl: './faq-add.component.html',
    styleUrls: ['./faq-add.component.scss'],
    animations: [routerTransition()]
})
export class FAQAddComponent implements OnInit {
    constructor(){}
    ngOnInit() {
    }
}
