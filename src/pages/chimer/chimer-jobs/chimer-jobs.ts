import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChimerJobsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chimer-jobs',
  templateUrl: 'chimer-jobs.html',
})
export class ChimerJobsPage {
  status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.status = "InProgress";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChimerJobsPage');
  }

}
