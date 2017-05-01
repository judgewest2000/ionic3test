import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginService } from '../providers/login-service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: string;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginService: LoginService) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            this.checkDirectionToGo();
        });
    }

    private async checkDirectionToGo() {
        const currentlyLoggedIn = await this.loginService.isLoggedIn();
        this.rootPage = currentlyLoggedIn ? 'HomePage' : 'Login';
    }
}
