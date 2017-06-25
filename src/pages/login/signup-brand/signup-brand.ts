import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the SignupBrandPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup-brand',
  templateUrl: 'signup-brand.html',
})
export class SignupBrandPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
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
