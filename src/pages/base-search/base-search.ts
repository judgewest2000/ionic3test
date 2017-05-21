import { BaseSelectParameters } from './../../modalselectors/base-select/base-select';
import { FormBuilder, Validators } from '@angular/forms';
import { SessionHelper } from './../../helpers/session-helper';
import { NavController, ModalController } from 'ionic-angular';
import { ISearch } from '../../modelinterfaces/base';
import { SearchService, SortField, SearchRequest } from '../../providers/search-service';
import { ViewChild } from '@angular/core';

export abstract class BaseSearch<T> {

  @ViewChild('searchElement') searchElement: any;

  constructor(public params: {
    navcontroller: NavController,
    modalController: ModalController,
    formBuilder: FormBuilder,
    searchService: SearchService,
    navGotoPage: string,
    title: string,
    endPoint: string,
    mapResult: (item: T) => ISearch,
    defaultSortField?: SortField,
    addItemGotoPage?: string,
    showClientOnlyTogglable: boolean
  }
  ) {
    this.title = params.title;
  }

  title: string;

  configDisplay = false;


  configToggle() {
    this.configDisplay = !this.configDisplay;
  }

  configForm = this.params.formBuilder.group(
    { showClientOnly: [false] }
  );


  displayAdd() {
    return this.params.addItemGotoPage !== undefined;
  }
  add() {
    this.params.navcontroller.push(this.params.addItemGotoPage, { id: 0 });
  }



  redirect(data: ISearch) {
    this.params.navcontroller.push(this.params.navGotoPage, { id: data.id });
  }



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
      searchText: searchText,
      showClientOnly: this.configForm.controls.showClientOnly.value
    };

    if (this.params.defaultSortField !== undefined) {
      searchRequest.sortField = this.params.defaultSortField;
    }

    const result = await this.params.searchService.search<T>(searchRequest)

    this._filteredItems = result.data.map(d => this.params.mapResult(d));

    this.performingSearch = false;
  }


  ionViewDidLoad() {
    let previousSearchValue = this.searchElement.value as string;
    this.getFilteredItems(previousSearchValue);

    this.configForm.valueChanges.subscribe(x => {
      this.getFilteredItems();
    });

  }

  ionViewDidEnter() {
    if (SessionHelper.getRefreshGrid()) {
      let previousSearchValue = this.searchElement.value as string;
      this.getFilteredItems(previousSearchValue);
    }
  }


}
