import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

import { SearchService } from '../../providers/search-service';
import { BaseSearch } from '../base-search/base-search';

import { StringHelper } from '../../helpers/string-helper';

@IonicPage()
@Component({
  selector: 'page-base-search',
  templateUrl: '../base-search/base-search.html',
})
export class ReleaseSearch extends BaseSearch<AIMC.Baltic.Dto.Kendo.ReleaseKendoAzDto> {

  constructor(navController: NavController, searchService: SearchService, modalController: ModalController, formBuilder: FormBuilder) {
    super({
      endPoint: 'release/search',
      navGotoPage: 'ReleaseEdit',
      mapResult: item => ({
        id: item.id,
        name: item.name,
        description1: item.headline,
        description2: item.displayDateTime !== null ? StringHelper.formatDate(item.displayDateTime) : ''
      }),
      navcontroller: navController,
      modalController: modalController,
      formBuilder: formBuilder,
      searchService: searchService,
      title: 'Releases',
      defaultSortField: {
        field: 'created',
        dir: 'desc'
      },
      addItemGotoPage: 'ReleaseEdit',
      showClientOnlyTogglable: false
    });
  }



}
