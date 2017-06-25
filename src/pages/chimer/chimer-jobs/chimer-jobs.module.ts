import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChimerJobsPage } from './chimer-jobs';

@NgModule({
  declarations: [
    ChimerJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChimerJobsPage),
  ],
  exports: [
    ChimerJobsPage
  ]
})
export class ChimerJobsPageModule {}
