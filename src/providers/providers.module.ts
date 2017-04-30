import { NgModule } from '@angular/core';

import { LoginService } from './login-service';
import { ReleaseService } from './release-service';
import { KeyValueService } from './key-value-service';

import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    imports: [
        HttpModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        LoginService,
        ReleaseService,
        KeyValueService
    ]
})
export class ProvidersModule { }
