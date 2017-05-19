import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';

import { ModalService } from '../../providers/modal-service';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private loginService: LoginService, private modalService: ModalService) {

        loginService.getLoginUsername()
            .then(username => {
                this.logoutText = `${username}`;
            });

    }

    gotoReleases() {
        this.navCtrl.push('ReleaseSearch');
    }

    gotoContacts(){
        this.navCtrl.push('ContactSearch');
    }

    async logout() {
        this.modalService.confirm({
            title: 'Logout',
            body: 'Confirm Logout',
            confirmCallback: () => {
                this.loginService.logOut()
                    .then(() => {
                        this.navCtrl.setRoot('Login');
                    });
            }
        });
    }

    logoutText = 'Logout';

}
