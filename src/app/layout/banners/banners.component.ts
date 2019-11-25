import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { films } from './data-table-demo3-data';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss'],
    animations: [routerTransition()]
})
export class BannersComponent implements OnInit {
    filmResource = new DataTableResource(films);
    films = [];
    filmCount = 0;

    @ViewChild(DataTable) filmsTable;

    constructor() {
        this.filmResource.count().then(count => this.filmCount = count);
    }

    reloadFilms(params) {
        this.filmResource.query(params).then(films => this.films = films);
    }

    cellColor(car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };

    // special params:

    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };


    ngOnInit() {
    }
}
