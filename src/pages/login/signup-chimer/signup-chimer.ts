import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the SignupChimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup-chimer',
  templateUrl: 'signup-chimer.html',
})
export class SignupChimerPage {

  public event = {
    dateStarts: '1990-02-20'
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupChimerPage');
  }

  signUp() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Successfully Registered',
        duration: 1500,
      });
      toast.present();
      this.navCtrl.remove(2, 1); // This will remove the 'Sign Up Page' from stack.
      this.navCtrl.pop();
    }, 1500);
  }

}
