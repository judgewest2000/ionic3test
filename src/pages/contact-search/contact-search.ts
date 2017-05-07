import { SearchService } from './../../providers/search-service';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BaseSearch } from "../base-search/base-search";

/**
 * Generated class for the ContactSearch page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-base-search',
  templateUrl: '../base-search/base-search.html',
})
export class ContactSearch extends BaseSearch<AIMC.Baltic.Dto.Kendo.ContactKendoAzDto> {

  constructor(navController: NavController, searchService: SearchService) {
    super({
      endPoint: 'contact/search',
      navGoto: 'ContactView',
      mapResult: item => ({
        id: item.id,
        name: item.name,
        avatarUrl: item.avatarUrl,
        description1: `Organisation: ${item.outletName}`
      }),
      navcontroller: navController,
      searchService: searchService,
      title: 'Contact',

    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactSearch');
  }

}
