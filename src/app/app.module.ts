import { ModalSelectorsModule } from './../modalselectors/modalselectors.module';
import { ModalsModule } from './../modals/modals.module';

import { NgModule, ErrorHandler } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';

import { FormModelsModule } from '../formmodels/formmodels.module';
import { ProvidersModule } from '../providers/providers.module';


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            swipeBackEnabled: false,
            platforms: {
                ios: {
                    //backButtonText: ''
                    //pageTransition: 'md-transition'
                }
            }
        }),
        ProvidersModule,
        FormModelsModule,
        ModalsModule,
        ModalSelectorsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        CallNumber,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
