import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandHomePage } from './brand-home';

@NgModule({
  declarations: [
    BrandHomePage,
  ],
  imports: [
    IonicPageModule.forChild(BrandHomePage),
  ],
  exports: [
    BrandHomePage
  ]
})
export class BrandHomePageModule {}
