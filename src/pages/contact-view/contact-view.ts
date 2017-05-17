import { ModalService } from './../../providers/modal-service';
import { DataAccessService } from './../../providers/data-access-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StringHelper } from "../../helpers/string-helper";

/**
 * Generated class for the ContactViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
    private modalService: ModalService
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
    let url = `tel:${StringHelper.getNumbers(this.item.communication.phoneNumber)}`;
    window.open(url, '_system');
  }

}
