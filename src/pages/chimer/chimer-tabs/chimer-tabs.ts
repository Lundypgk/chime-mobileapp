import { Component } from '@angular/core';
import { ChimerHomePage } from "../chimer-home/chimer-home";
import { ChimerProfilePage } from "../chimer-profile/chimer-profile";
import { ChimerJobsPage } from "../chimer-jobs/chimer-jobs";


@Component({
    templateUrl: 'chimer-tabs.html'
})
export class ChimerTabsPage {

    tab1Root = ChimerHomePage;
    tab2Root = ChimerJobsPage;
    tab3Root = ChimerProfilePage;

    constructor() {

    }
}
