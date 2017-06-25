import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChimerHomePage } from './chimer-home';

@NgModule({
  declarations: [
    ChimerHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ChimerHomePage),
  ],
  exports: [
    ChimerHomePage
  ]
})
export class HomePageModule { }
