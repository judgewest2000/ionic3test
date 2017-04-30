import { NgModule } from '@angular/core';

import { LoginService } from './login-service';
import { ReleaseService } from './release-service';

import {  HttpModule } from '@angular/http';

@NgModule({
    imports:[
        HttpModule
    ],
    providers: [
        LoginService,
        ReleaseService
    ]
})
export class ProvidersModule { }
