import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchService } from '../../providers/search-service';
import { BaseSearch } from '../base-search/base-search';

@IonicPage()
@Component({
  selector: 'page-base-search',
  templateUrl: '../base-search/base-search.html',
})
export class ReleaseSearch extends BaseSearch<AIMC.Baltic.Dto.Kendo.ReleaseKendoAzDto> {

  constructor(navController: NavController, searchService: SearchService) {
    super({
      endPoint: 'release/search',
      navGoto: 'ReleaseEdit',
      mapResult: item => ({
        id: item.id,
        name: item.name,
        description1: item.headline
      }),
      navcontroller: navController,
      searchService: searchService,
      title: 'Release'
    });
  }



}
