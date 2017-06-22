import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupBrandPage } from './signup-brand';

@NgModule({
  declarations: [
    SignupBrandPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupBrandPage),
  ],
  exports: [
    SignupBrandPage
  ]
})
export class SignupBrandPageModule {}
