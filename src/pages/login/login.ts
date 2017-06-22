import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupBrandPage } from "./signup-brand/signup-brand";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  signupBrand() {
    this.navCtrl.push(SignupBrandPage);
  }

  signupChimer() {
    this.navCtrl.push(SignupBrandPage);
  }
}
