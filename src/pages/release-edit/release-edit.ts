import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReleaseService } from '../../providers/release-service';
import { ModalService } from '../../providers/modal-service';
import { IForm } from '../../modelinterfaces/ibase';

@IonicPage({
  segment: 'release-edit/:id'
})
@Component({
  selector: 'page-release-edit',
  templateUrl: 'release-edit.html',
})
export class ReleaseEdit {

  segment = 'main';

  release: IForm<AIMC.Baltic.Dto.MediaDatabase.ReleaseDto>;
  releaseLoaded = false;

  delete() {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: 'Confirm delete of this release',
      confirmCallback: () => {
        this.releaseService.delete(this.release.viewModel)
          .then(() => {
            this.navCtrl.pop();
          });
      }
    });
  }

  cancel() {
    this.navCtrl.pop();
  }

  save() {

    if (this.release.form.invalid) {
      this.modalService.alert({
        title: 'Cannot save release',
        body: 'Please check all fields are valid'
      });
    } else {
      this.releaseService.save(this.release);
      this.navCtrl.pop();
    }
  }

  displayDelete() {
    if (this.release === undefined) {
      return false;
    }
    return this.release.viewModel.id !== 0;
  }

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private releaseService: ReleaseService,
    private modalService: ModalService) {

    modalService.turnOnLoading();

    let id = parseInt(this.navParams.get('id'));

    releaseService.getForm(id).then(value => {

      if (id === 0) {
        value.form.controls['displayDateTime'].setValue(new Date().toISOString());
        value.form.controls['scheduledDateTime'].setValue(new Date().toISOString());
      }
      
      this.release = value;
      this.releaseLoaded = true;
      modalService.turnOffLoading();
      this.updateHeadline();
    });

  }

  //KEEP THE HEADLINE AND NAME INLINE WITH EACH OTHER SAME AS NORMAL SYSTEM
  _previousName = '';
  updateHeadline() {

    this._previousName = this.release.form.controls['name'].value;

    this.release.form.controls['name'].valueChanges.subscribe((name: string) => {
      if (this.release.form.controls['headline'].value === this._previousName) {
        this.release.form.controls['headline'].setValue(name);
      }
      this._previousName = name;
    });
  }

}
