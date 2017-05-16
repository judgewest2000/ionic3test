import { ViewController, Checkbox, NavParams } from 'ionic-angular';
import { ISearch } from '../../modelinterfaces/base';
import { SearchService, SortField, SearchRequest } from '../../providers/search-service';

export interface BaseSelectParameters {
  idsToExclude: number[];
}

export abstract class BaseSelect<T> {

  constructor(private params: {
    viewController: ViewController,
    navParams: NavParams,
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

  idsToExclude: number[];

  idsToSendBack: number[] = [];

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

  close() {
    this.params.viewController.dismiss();
  }

  addAndGoBack() {
    this.params.viewController.dismiss(this.idsToSendBack);
  }

  add(evt: Checkbox, data: ISearch) {
    if (evt.checked) {
      this.idsToSendBack.push(data.id);
    } else {
      this.idsToSendBack = this.idsToSendBack.filter(i => i !== data.id);
    }
  }

  amIChecked(item: ISearch) {
    let checked = this.idsToSendBack.some(id => id === item.id);
    return checked;
  }

  showCheckbox(item: ISearch) {
    if (this.idsToExclude === undefined) {
      return true;
    }

    let show = !this.idsToExclude.some(id => id === item.id);

    return show;
  }

  ionViewDidEnter() {

    this.idsToExclude = this.params.navParams.get('idsToExclude') as number[];

    this.getFilteredItems();
  }

}
