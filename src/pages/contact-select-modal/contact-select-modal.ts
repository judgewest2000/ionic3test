import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ContactSelectModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact-select-modal',
  templateUrl: 'contact-select-modal.html',
})
export class ContactSelectModal {



  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  dismiss(){
    this.viewCtrl.dismiss('123456');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactSelectModal');
  }

}
