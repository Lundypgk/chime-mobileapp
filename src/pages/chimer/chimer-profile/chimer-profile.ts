import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from "../../login/login";

/**
 * Generated class for the ChimerProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chimer-profile',
  templateUrl: 'chimer-profile.html'
})
export class ChimerProfilePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChimerProfilePage');
  }

  signOut() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(LoginPage);
    }, 1500);
  }

}
