import { EmailDistributionEditorManualRecipientEditPageModule } from './email-distribution-editor-manual-recipient-edit/email-distribution-editor-manual-recipient-edit.module';
import { ContactSelectModule } from './../pages/contact-select/contact-select.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        ContactSelectModule,
        EmailDistributionEditorManualRecipientEditPageModule
    ]
})
export class SelectModule { }
