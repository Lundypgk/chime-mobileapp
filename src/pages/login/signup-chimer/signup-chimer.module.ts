import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupChimerPage } from './signup-chimer';

@NgModule({
  declarations: [
    SignupChimerPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupChimerPage),
  ],
  exports: [
    SignupChimerPage
  ]
})
export class SignupChimerPageModule {}
