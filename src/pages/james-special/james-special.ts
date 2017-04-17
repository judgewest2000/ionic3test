import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JamesSpecial page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-james-special',
    templateUrl: 'james-special.html',
})
export class JamesSpecial {

    gender: string = 'm';

    value: number = 0; // Default is 0

    setInput() {
        this.value = 42;
    }

    setGender() {
        this.gender = 'f';
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, private cd: ChangeDetectorRef) {
        alert('hi');

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad JamesSpecial');
    }

}
