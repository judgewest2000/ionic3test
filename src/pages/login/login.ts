import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginService } from '../../providers/login-service';

import { NgForm } from '@angular/forms';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  username = "james.west@westdarley";
  password = "Password1*";

  async login() {
    const loginDetails = await this.loginService.login(this.username, this.password);
    alert(JSON.stringify(loginDetails));
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
