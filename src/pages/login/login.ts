import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SignupBrandPage } from "./signup-brand/signup-brand";
import { ChimerHomePage } from "../chimer/home/chimer-home";
import { TabsPage } from "../chimer/tabs/tabs";

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
    this.navCtrl.push(SignupBrandPage);
  }

  login() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      console.log(this.type);
      if (this.type == "chimer") {
        this.navCtrl.setRoot(TabsPage);
      }
      else {

      }
    }, 1500);
  }
}
