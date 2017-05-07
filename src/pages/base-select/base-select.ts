import {  ViewController } from 'ionic-angular';
import { ISearch } from '../../modelinterfaces/base';
import { SearchService, SortField, SearchRequest } from '../../providers/search-service';
import { ViewChild } from '@angular/core';

export abstract class BaseSelect<T> {

  @ViewChild('searchElement') searchElement: any;

  constructor(private params: {
    viewController: ViewController,
    searchService: SearchService,
    title: string,
    endPoint: string,
    mapResult: (item: T) => ISearch,
    defaultSortField?: SortField
  }
  ) {
    this.title = params.title;
  }

  title: string;

  performingSearch = true;

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
