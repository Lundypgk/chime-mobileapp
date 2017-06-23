import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupBrandPage } from "./signup-brand/signup-brand";
import { ChimerHomePage } from "../chimer/home/chimer-home";
import { TabsPage } from "../chimer/tabs/tabs";

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

  login() {
    this.navCtrl.setRoot(TabsPage);
  }
}
