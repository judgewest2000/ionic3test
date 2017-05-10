import { SearchService } from './../../providers/search-service';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { BaseSelect } from "../base-select/base-select";

/**
 * Generated class for the ContactSelect page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-base-select',
  templateUrl: '../base-select/base-select.html',
})
export class ContactSelect extends BaseSelect<AIMC.Baltic.Dto.Kendo.ContactKendoAzDto> {

  constructor(viewController: ViewController, searchService: SearchService, navParams: NavParams) {
    super({
      viewController: viewController,
      navParams: navParams,
      searchService: searchService,
      title: 'Contact Select',
      endPoint: 'contact/search',
      mapResult: item => ({
        id: item.id,
        name: item.name,
        avatarUrl: item.avatarUrl,
        description1: item.outletName
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactSelect');
  }

}
