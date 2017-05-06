import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReleaseService } from '../../providers/release-service';
import { ModalService } from '../../providers/modal-service';


import { BaseEdit } from '../base-edit/base-edit';

@IonicPage({
  segment: 'release-edit/:id'
})
@Component({
  selector: 'page-release-edit',
  templateUrl: 'release-edit.html',
})
export class ReleaseEdit extends BaseEdit<AIMC.Baltic.Dto.MediaDatabase.ReleaseDto>{

  segment = 'main';

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private releaseService: ReleaseService,
    private modalService: ModalService) {

    super({
      navCtrl: navCtrl,
      navParams: navParams,
      modalService: modalService,
      baseEntityService: releaseService,
      entityTitle: 'Release'
    });

    super.getUsingNavId().then(() => {
      if (this.item.viewModel.id === 0) {
        this.item.form.controls['displayDateTime'].setValue(new Date().toISOString());
        this.item.form.controls['scheduledDateTime'].setValue(new Date().toISOString());
        this.updateHeadline();
      }
    });
  }


  displayDelete() {
    return this.item.viewModel.id !== 0;
  }

  //KEEP THE HEADLINE AND NAME INLINE WITH EACH OTHER SAME AS NORMAL SYSTEM
  _previousName = '';
  updateHeadline() {
    this._previousName = this.item.form.controls['name'].value;
    this.item.form.controls['name'].valueChanges.subscribe((name: string) => {
      if (this.item.form.controls['headline'].value === this._previousName) {
        this.item.form.controls['headline'].setValue(name);
      }
      this._previousName = name;
    });
  }

}
