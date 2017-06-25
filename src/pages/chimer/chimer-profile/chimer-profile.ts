import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, App } from 'ionic-angular';
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

  constructor(private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
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
      let toast = this.toastCtrl.create({
        message: 'You have logged Out !',
        duration: 1500,
      });
      toast.present();
      this.app.getRootNav().setRoot(LoginPage);
      // this.navCtrl.setRoot(LoginPage);
    }, 1500);
  }

  updateProfile() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Updated Profile',
        duration: 1500,
      });
      toast.present();
    }, 1500);
  }
}
