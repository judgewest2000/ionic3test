import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { ReleaseService } from '../../providers/release-service';
import { ModalService } from '../../providers/modal-service';

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

  release: AIMC.Baltic.Dto.MediaDatabase.ReleaseDto;

  myname = "";


  delete() {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: 'Confirm delete of this release',
      confirmCallback: () =>{
        this.releaseService.delete(this.release);
        this.navCtrl.pop();
      }
    });
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
    private navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private modalCtrl: ModalController,
    private releaseService: ReleaseService,
    private modalService: ModalService) {
    
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
