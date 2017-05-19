import { MapViewPageModule } from './../pages/map-view/map-view.module';

import { EmailDistributionEditorManualRecipientEditPageModule } from './email-distribution-editor-manual-recipient-edit/email-distribution-editor-manual-recipient-edit.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        EmailDistributionEditorManualRecipientEditPageModule,
        MapViewPageModule
    ]
})
export class ModalsModule { }
