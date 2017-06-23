import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChimerProfilePage } from './chimer-profile';

@NgModule({
  declarations: [
    ChimerProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ChimerProfilePage),
  ],
  exports: [
    ChimerProfilePage
  ]
})
export class ChimerProfilePageModule {}
