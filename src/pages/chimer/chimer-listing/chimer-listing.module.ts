import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChimerListingPage } from './chimer-listing';

@NgModule({
  declarations: [
    ChimerListingPage,
  ],
  imports: [
    IonicPageModule.forChild(ChimerListingPage),
  ],
  exports: [
    ChimerListingPage
  ]
})
export class ListingPageModule {}
