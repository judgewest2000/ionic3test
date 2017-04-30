import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ISearch } from '../../modelInterfaces/IBase';

import { ReleaseService } from '../../providers/release-service';



/**
 * Generated class for the ReleaseSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-release-search',
  templateUrl: 'release-search.html',
})
export class ReleaseSearch {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private releaseService: ReleaseService) {
  }
  goto(data: ISearch) {
    this.navCtrl.push('ReleaseEdit', { id: data.id });
  }

  searchTerm = '';
  _filteredReleases: ISearch[];
  getFilteredReleases(searchTerm?: string) {
    this.releaseService.search(searchTerm)
      .then(results => {
        this._filteredReleases = results;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleaseSearch');
  }

  ionViewWillEnter() {
    this.getFilteredReleases(this.searchTerm);
  }

}
