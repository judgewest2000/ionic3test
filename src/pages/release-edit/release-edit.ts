import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReleaseService } from '../../providers/release-service';
import { ModalService } from '../../providers/modal-service';
import { IForm, IFormControlDefinition } from '../../modelinterfaces/base';
import { FormControl } from '@angular/forms';


@IonicPage({
  segment: 'release-edit/:id'
})
@Component({
  selector: 'page-release-edit',
  templateUrl: 'release-edit.html',
})
export class ReleaseEdit {

  segment = 'main';

  item: IForm<AIMC.Baltic.Dto.MediaDatabase.ReleaseDto>;
  submitAttemptMade = false;

  releaseLoaded = false;

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

      this.item = value;
      this.releaseLoaded = true;
      modalService.turnOffLoading();
      this.updateHeadline();
    });

  }

  createFormControlDefinition(title: string, formControlItem: FormControl) {
    return <IFormControlDefinition>{
      title: title,
      formControlItem: formControlItem,
      submitAttemptMade: this.submitAttemptMade
    };
  }


  delete() {
    this.modalService.confirm({
      title: 'Confirm Deletion',
      body: 'Confirm delete of this release',
      confirmCallback: () => {
        this.releaseService.delete(this.item.viewModel)
          .then(() => {
            this.navCtrl.pop();
          });
      }
    });
  }

  cancel() {
    this.navCtrl.pop();
  }


  async save() {

    this.submitAttemptMade = true;

    if (this.item.form.invalid) {
      this.modalService.alert({
        title: 'Cannot save release',
        body: 'Please check all fields are valid'
      });
    } else {
      try {
        this.modalService.turnOnLoading();
        let release = await this.releaseService.save(this.item);
        this.item.viewModel = release;
        this.modalService.turnOffLoading();

        this.modalService.alert({
          title: 'Release saved',
          body: 'Your release has been saved',
        });

      } catch (ex) {
        this.modalService.alert({
          title: 'Issue saving your release',
          body: `Could not save release: ${JSON.stringify(ex)}`
        });
      }

    }
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
