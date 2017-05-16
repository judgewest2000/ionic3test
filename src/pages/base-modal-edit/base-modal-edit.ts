import { FormControl } from '@angular/forms';
import { IForm, IFormControlDefinition } from './../../modelinterfaces/base';
import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

export abstract class BaseModalEdit<T> {

  item: IForm<T>;
  submitAttemptMade = false;
  formLoaded = false;

  constructor(private params: {
    viewController: ViewController
  }) {
    this.item = this.params.viewController.getNavParams().data;
    this.formLoaded = true;
  }

  createFormControlDefinition(title: string, formControlItem: FormControl) {
    return <IFormControlDefinition>{
      title: title,
      formControlItem: formControlItem,
      submitAttemptMade: this.submitAttemptMade
    };
  }

  close() {
    this.params.viewController.dismiss();
  }


}
