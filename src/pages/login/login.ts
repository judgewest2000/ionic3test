import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginService } from '../../providers/login-service';

import { NgForm } from '@angular/forms';

import { ModalService } from '../../providers/modal-service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  username = "james.west@westdarley";
  password = "Password1*";

  async login() {

    this.modalService.turnOnLoading();

    const loginStatus = await this.loginService.login(this.username, this.password);

    this.modalService.turnOffLoading();

    if (loginStatus.success) {
      this.navCtrl.setRoot('HomePage');
    } else {
      this.modalService.alert({
        title: 'Could not log in',
        body: loginStatus.message
      });
    }
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService, private modalService: ModalService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
