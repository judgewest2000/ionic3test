import { NavController } from 'ionic-angular';
import { ISearch } from '../../modelInterfaces/IBase';
import { SearchService, SortField, SearchRequest } from '../../providers/search-service';

export abstract class BaseSearch<T> {

  constructor(private params: {
    navcontroller: NavController,
    searchService: SearchService,
    navGoto: string,
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

  redirect(data: ISearch) {
    this.params.navcontroller.push(this.params.navGoto, { id: data.id });
  }

  _lastSuccessfulSearch = '';
  _filteredItems: ISearch[];
  async getFilteredItems(searchText?: string) {

    if (searchText === undefined) {
      searchText = '';
    }

    if (this._lastSuccessfulSearch === undefined) {
      this._lastSuccessfulSearch = '';
    }

    if (searchText.length === 0 && this._lastSuccessfulSearch.length !== 0) {
      searchText = this._lastSuccessfulSearch;
    }

    if (searchText !== undefined && searchText.length !== 0 && searchText.length < 3) {
      return;
    }

    this.performingSearch = true;

    const searchRequest: SearchRequest = {
      endPoint: this.params.endPoint,
      searchText: searchText
    }

    if (this.params.defaultSortField !== undefined) {
      searchRequest.sortField = this.params.defaultSortField;
    }

    const result = await this.params.searchService.search<T>(searchRequest)

    this._filteredItems = result.data.map(d => this.params.mapResult(d));

    this._lastSuccessfulSearch = searchText;

    this.performingSearch = false;


  }

  ionViewDidEnter() {
    this.getFilteredItems();
  }

}
