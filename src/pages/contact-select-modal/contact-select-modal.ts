import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

import { ContactService } from '../../providers/contact-service';

import { IContact } from '../../modelinterfaces/IContact';

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

  _contacts: IContact[];

  constructor(public viewCtrl: ViewController,
    public navParams: NavParams,
    public contactService: ContactService
  ) {
    this._contacts = contactService.entities;
  }

  dismiss() {
    this.viewCtrl.dismiss('123456');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactSelectModal');
  }

}
