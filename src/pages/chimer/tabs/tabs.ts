import { Component } from '@angular/core';
import { ChimerHomePage } from "../home/chimer-home";
import { ChimerProfilePage } from "../profile/chimer-profile";
import { ChimerJobsPage } from "../jobs/chimer-jobs";


@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = ChimerHomePage;
    tab2Root = ChimerJobsPage;
    tab3Root = ChimerProfilePage;

    constructor() {

    }
}
