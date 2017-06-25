import { Component } from '@angular/core';
import { BrandHomePage } from "../brand-home/brand-home";


@Component({
    templateUrl: 'brand-tabs.html'
})
export class BrandTabsPage {

    tab1Root = BrandHomePage;
    // tab2Root = ChimerJobsPage;
    // tab3Root = ChimerProfilePage;

    constructor() {

    }
}
