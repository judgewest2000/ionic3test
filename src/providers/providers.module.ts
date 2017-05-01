import { NgModule } from '@angular/core';

import { DataAccessService } from './data-access-service';
import { LoginService } from './login-service';
import { ReleaseService } from './release-service';
import { KeyValueService } from './key-value-service';
import { ModalService } from './modal-service'
import { SearchService } from './search-service';

import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    imports: [
        HttpModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        DataAccessService,
        LoginService,
        ReleaseService,
        KeyValueService,
        ModalService,
        SearchService
    ]
})
export class ProvidersModule { }
