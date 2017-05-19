import { NavController } from 'ionic-angular';
import { ISearch } from '../../modelinterfaces/base';
import { SearchService, SortField, SearchRequest } from '../../providers/search-service';
import { ViewChild } from '@angular/core';

export abstract class BaseSearch<T> {

  @ViewChild('searchElement') searchElement: any;

  constructor(private params: {
    navcontroller: NavController,
    searchService: SearchService,
    navGoto: string,
    title: string,
    endPoint: string,
    mapResult: (item: T) => ISearch,
    defaultSortField?: SortField,
    addGoto?: string
  }
  ) {
    this.title = params.title;
  }

  title: string;

  performingSearch = true;

  displayAdd() {
    return this.params.addGoto !== undefined;
  }

  add() {
    this.params.navcontroller.push(this.params.addGoto, { id: 0 });
  }

  redirect(data: ISearch) {
    this.params.navcontroller.push(this.params.navGoto, { id: data.id });
  }

  _filteredItems: ISearch[];
  async getFilteredItems(searchText?: string) {


    if (searchText === undefined) {
      searchText = '';
    }

    if (searchText.length !== 0 && searchText.length < 3) {
      return;
    }

    this.performingSearch = true;

    let searchRequest: SearchRequest = {
      endPoint: this.params.endPoint,
      searchText: searchText
    }

    if (this.params.defaultSortField !== undefined) {
      searchRequest.sortField = this.params.defaultSortField;
    }

    const result = await this.params.searchService.search<T>(searchRequest)

    this._filteredItems = result.data.map(d => this.params.mapResult(d));

    this.performingSearch = false;
  }

  ionViewDidEnter() {

    let previousSearchValue = this.searchElement.value as string;

    this.getFilteredItems(previousSearchValue);
  }

}
