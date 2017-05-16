import { FormControl } from '@angular/forms';
import { IForm, IFormControlDefinition } from './../../modelinterfaces/base';
import { ViewController } from 'ionic-angular';

export abstract class BaseModalEdit<T> {

  item: IForm<T>;
  submitAttemptMade = false;
  formLoaded = false;
  originalFormData: any;

  constructor(private params: {
    viewController: ViewController
  }) {
    this.item = this.params.viewController.getNavParams().data;
    this.originalFormData = this.item.form.getRawValue();
    this.formLoaded = true;
  }

  createFormControlDefinition(title: string, formControlItem: FormControl) {
    return <IFormControlDefinition>{
      title: title,
      formControlItem: formControlItem,
      submitAttemptMade: this.submitAttemptMade
    };
  }

  save() {
    this.submitAttemptMade = true;
    if (!this.item.form.invalid) {
      this.params.viewController.dismiss();
    }
  }

  cancel() {
    if (this.item.form.dirty) {
      this.item.form.setValue(this.originalFormData);
    }
    this.params.viewController.dismiss();
  }


}
