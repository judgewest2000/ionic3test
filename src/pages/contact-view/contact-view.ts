import { ModalService } from './../../providers/modal-service';
import { DataAccessService } from './../../providers/data-access-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, NavOptions } from 'ionic-angular';
import { StringHelper } from "../../helpers/string-helper";
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-contact-view',
  templateUrl: 'contact-view.html',
})
export class ContactViewPage {

  item: AIMC.Baltic.Dto.MediaDatabase.ContactDto;
  itemLoaded = false;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataAccessService: DataAccessService,
    private modalService: ModalService,
    private callNumber: CallNumber,
    private platform: Platform
  ) {

    let id = parseInt(this.navParams.get('id')) as number;
    modalService.turnOnLoading();
    dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.ContactDto>('contact', { id: id })
      .then(contact => {
        this.item = contact;
        this.itemLoaded = true;
        modalService.turnOffLoading();
      });

  }
  
  displayAvatar() {
    return StringHelper.isNotNullOrWhiteSpace(this.item.communication.avatarUrl);
  }

  displayProfile() {
    return StringHelper.isNotNullOrWhiteSpace(this.item.profile);
  }

  getProfileChunks() {
    return this.item.profile.split('\n');
  }

  displayEmail() {
    return StringHelper.isNotNullOrWhiteSpace(this.item.communication.emailAddress);
  }

  sendEmail() {
    let url = `mailto:${this.item.communication.emailAddress}`;
    window.open(url, '_system');
  }

  displaySite() {
    return StringHelper.isNotNullOrWhiteSpace(this.item.communication.mainHomepage);
  }

  gotoSite() {
    window.open(this.item.communication.mainHomepage, '_system');
  }

  displayCall() {
    return StringHelper.isNotNullOrWhiteSpace(this.item.communication.phoneNumber);
  }

  call() {
    let tel = StringHelper.getNumbers(this.item.communication.phoneNumber);

    if (this.platform.is('core')) {
      window.open(`tel:${tel}`, '_system');
    } else {
      this.callNumber.callNumber(tel, false);
    }
  }

  displayAddress() {
    return [this.item.address.line1, this.item.address.city].every(a => !StringHelper.isNullOrWhiteSpace(a));
  }

  gotoMapLink() {
    let allChunks = (this.item.address.line1 + ' ' + this.item.address.city + ' ' + this.item.address.postalCode)
      .split(' ').join('+');

    window.open(`https://www.google.com/maps/place/${allChunks}`, '_system');

  }

}
