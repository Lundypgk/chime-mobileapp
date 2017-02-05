import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, LoadingController , NavParams } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl : LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
      let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.setRoot(TabsPage);
  }
}
