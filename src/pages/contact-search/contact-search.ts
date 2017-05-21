import { FormBuilder } from '@angular/forms';
import { SearchService } from './../../providers/search-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
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

  constructor(navController: NavController, searchService: SearchService, modalController: ModalController, formBuilder: FormBuilder) {
    super({
      endPoint: 'contact/search',
      navGotoPage: 'ContactViewPage',
      mapResult: item => ({
        id: item.id,
        name: item.name,
        avatarUrl: item.avatarUrl,
        description1: item.outletName
      }),
      navcontroller: navController,
      modalController: modalController,
      formBuilder: formBuilder,
      searchService: searchService,
      title: 'Contacts',
      showClientOnlyTogglable: true
    });

  }


  ionViewDidLoad() {
    super.ionViewDidLoad();
    console.log('ionViewDidLoad ContactSearch');
  }

}
