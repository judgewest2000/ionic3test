import { SearchService } from './../../providers/search-service';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { BaseSelect } from "../base-select/base-select";


@IonicPage()
@Component({
  selector: 'page-base-select',
  templateUrl: '../base-select/base-select.html',
})
export class OutletSelect extends BaseSelect<AIMC.Baltic.Dto.Kendo.OutletKendoAzDto> {

  constructor(viewController: ViewController, searchService: SearchService, navParams: NavParams) {
    super({
      viewController: viewController,
      navParams: navParams,
      searchService: searchService,
      title: 'Outlet Select',
      endPoint: 'outlet/search',
      mapResult: item => ({
        id: item.id,
        name: item.name,
        avatarUrl: item.avatarUrl
      })
    });
  }

 
}
