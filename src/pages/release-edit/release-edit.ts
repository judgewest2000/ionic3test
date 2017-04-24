import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { ReleaseService } from '../../providers/release-service';
import { ReleaseDtoViewModel } from '../../models/releasedtoviewmodel';

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

  release: ReleaseDtoViewModel;

  options() {
    let actionSheet = this.actionSheetController.create();

    actionSheet.addButton({
      text: 'Save Changes',
      handler: () => {
        this.releaseService.save(this.release);
        this.navCtrl.pop();
      }
    });

    if (this.release.id !== 0) {
      actionSheet.addButton({
        text: 'Delete Release',
        role: 'destructive',
        handler: () => {
          this.releaseService.delete(this.release);
          this.navCtrl.pop();
        }
      });
    }

    actionSheet.addButton({
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.navCtrl.pop();
      }
    });

    actionSheet.present();
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetController: ActionSheetController,
    public releaseService: ReleaseService) {

    let id = parseInt(this.navParams.get('id'));
    this.release = releaseService.get(id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleaseEdit');

  }

}
