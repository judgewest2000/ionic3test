import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ISearch } from '../../modelInterfaces/IBase';
import { ReleaseService } from '../../providers/release-service';
import { BaseSearch } from '../base-search/base-search';


/**
 * Generated class for the ReleaseSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-release-search',
  templateUrl: '../base-search/base-search.html',
})
export class ReleaseSearch extends BaseSearch{

  constructor(navCtrl: NavController, releaseService: ReleaseService) {
    super(navCtrl, releaseService, 'ReleaseEdit', 'Release Search');
  }


}
