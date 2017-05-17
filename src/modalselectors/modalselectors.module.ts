import { GroupSelectModule } from './group-select/group-select.module';
import { OutletSelectModule } from './outlet-select/outlet-select.module';
import { ContactSelectModule } from './contact-select/contact-select.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        ContactSelectModule,
        OutletSelectModule,
        GroupSelectModule
    ]
})
export class ModalSelectorsModule { }
