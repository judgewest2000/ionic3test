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

  redirect(data: ISearch) {
    this.params.navcontroller.push(this.params.navGoto, { id: data.id });
  }

  searchText = '';
  _filteredItems: ISearch[];
  async getFilteredItems(searchText?: string) {

    if (searchText.length !== 0 && searchText.length < 3) {
      return;
    }

    const searchRequest: SearchRequest = {
      endPoint: this.params.endPoint,
      searchText: searchText
    }

    if (this.params.defaultSortField !== undefined) {
      searchRequest.sortField = this.params.defaultSortField;
    }

    const result = await this.params.searchService.search<T>(searchRequest)

    this._filteredItems = result.data.map(d => this.params.mapResult(d));
  }

  ionViewWillEnter() {
    this.getFilteredItems(this.searchText);
  }

}
