import { NavController } from 'ionic-angular';
import { IBase, ISearch } from '../../modelInterfaces/IBase';
import { BaseEntityService } from '../../providers/baseentity-service';

export abstract class BaseSearch {

  constructor(private navCtrl: NavController,
    private baseEntityService: BaseEntityService<IBase>,
    private navGoto: string,
    public title: string) {
  }

  goto(data: ISearch) {
    this.navCtrl.push(this.navGoto, { id: data.id });
  }

  searchTerm = '';
  _filteredItems: ISearch[];

  getFilteredItems(searchTerm?: string) {
    this.baseEntityService.search(searchTerm)
      .then(results => {
        this._filteredItems = results;
      });
  }

  ionViewWillEnter() {
    this.getFilteredItems(this.searchTerm);
  }

}
