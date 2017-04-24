import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  clicker() {
    console.log('hi');
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public releaseService: ReleaseService) {

    let id = parseInt(this.navParams.get('id'));
    this.release = releaseService.get(id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleaseEdit');

  }

}
