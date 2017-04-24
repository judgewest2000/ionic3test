import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReleaseService } from '../../providers/release-service';
import { ReleaseDtoViewModel } from '../../models/ReleaseDtoViewModel';

import { StringHelper } from '../../helpers/string-helper';


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

  releases: ReleaseDtoViewModel[];

  gotoRelease(data: ReleaseDtoViewModel) {
    this.navCtrl.push('ReleaseEdit', { id: data.id });
  }

  searchTerm = '';
  _filteredReleases: ReleaseDtoViewModel[];
  getFilteredReleases(searchTerm?: string) {

    if (searchTerm === undefined || searchTerm.length < 3) {
      searchTerm = '';
    }

    let filteredReleases = this.releases.filter(r => !r.deleted);

    if(this.stringHelper.isNotNullOrWhiteSpace(searchTerm)){
      filteredReleases = filteredReleases.filter(r => this.stringHelper.contains(r.name, searchTerm));
    }

    this._filteredReleases = filteredReleases;

  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private releaseService: ReleaseService,
    private stringHelper: StringHelper) {

    this.releases = releaseService.releases;
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleaseSearch');
  }

   ionViewWillEnter(){
    this.getFilteredReleases(this.searchTerm);
  }

}
