import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SignupBrandPage } from "./signup-brand/signup-brand";
import { SignupChimerPage } from "./signup-chimer/signup-chimer";
import { ChimerHomePage } from "../chimer/chimer-home/chimer-home";
import { ChimerTabsPage } from "../chimer/chimer-tabs/chimer-tabs";
import { BrandTabsPage } from "../brand/brand-tabs/brand-tabs";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  type: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
    this.type = "chimer";
  }

  signupBrand() {
    this.navCtrl.push(SignupBrandPage);
  }

  signupChimer() {
    this.navCtrl.push(SignupChimerPage);
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      if (this.type == "chimer") {
        this.navCtrl.setRoot(ChimerTabsPage);
      }
      else {
        this.navCtrl.setRoot(BrandTabsPage);
      }
    }, 1500);
  }
}
