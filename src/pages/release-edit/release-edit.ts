import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';

import { ReleaseService } from '../../providers/release-service';

import { IRelease } from '../../modelInterfaces/IRelease';

/**
 * Generated class for the ReleaseEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'release-edit/:id'
})
@Component({
  selector: 'page-release-edit',
  templateUrl: 'release-edit.html',
})
export class ReleaseEdit {

  segment = 'main';

  release: IRelease;

  myname = "";


  delete() {
    let actionSheet = this.actionSheetController.create({
      title: 'Confirm Deletion',
      buttons: [
        {
          text: 'Confirm',
          role: 'destructive',
          handler: () => {
            this.releaseService.delete(this.release);
            this.navCtrl.pop();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        }]
    });
    actionSheet.present();
  }

  cancel() {
    this.navCtrl.pop();
  }

  save() {
    this.releaseService.save(this.release);
    this.navCtrl.pop();
  }

  displayDelete() { return this.release.id !== 0; }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetController: ActionSheetController,
    public modalCtrl: ModalController,
    public releaseService: ReleaseService) {

    let id = parseInt(this.navParams.get('id'));

    releaseService.get(id).then(value => this.release = value);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleaseEdit');

  }

  selectContacts() {
    let contactModal = this.modalCtrl.create('ContactSelectModal');
    contactModal.present();
  }

}
