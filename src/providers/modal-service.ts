import { MapViewPage } from './../pages/map-view/map-view';
import { GroupSelect } from './../modalselectors/group-select/group-select';
import { OutletSelect } from './../modalselectors/outlet-select/outlet-select';
import { ContactSelect } from './../modalselectors/contact-select/contact-select';

import { IForm } from './../modelinterfaces/base';


import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading, ModalController, ModalOptions } from 'ionic-angular';
import { BaseSelectParameters } from "../modalselectors/base-select/base-select";
import { EmailDistributionEditorManualRecipientEditPage } from "../modals/email-distribution-editor-manual-recipient-edit/email-distribution-editor-manual-recipient-edit";

export interface AlertDefinition {
    title: string;
    subTitle?: string;
    body: string;
    confirmCallback?: () => any;
}

export interface ConfirmDefinition extends AlertDefinition {
    cancelCallback?: () => any;
}

export interface SelectSingleItemDefinition {
    title: string;
    selectedId?: any;
    list: {
        id: any;
        displayText: string;
    }[],
    confirmCallback: (id: any) => any;
}

@Injectable()
export class ModalService {

    constructor(
        private alertController: AlertController,
        private loadingController: LoadingController,
        private modalController: ModalController) {

    }

    private getModalOptions() {
        return <ModalOptions>{
            enableBackdropDismiss: false
        };
    }

    loading: Loading

    turnOnLoading(message?: string) {
        this.loading = this.loadingController.create({
            content: message !== undefined ? message : 'Please wait'
        });
        this.loading.present();
    }

    turnOffLoading() {
        this.loading.dismiss();
        delete this.loading;
    }

    private createModal(definition) {
        const modal = this.alertController.create({
            title: definition.title,
            message: definition.body
        });

        if (definition.subTitle !== undefined) {
            modal.setSubTitle(definition.subTitle);
        }

        return modal;

    }

    alert(definition: AlertDefinition) {

        const modal = this.createModal(definition);

        modal.addButton({
            text: 'OK',
            handler: () => {
                if (definition.confirmCallback !== undefined) {
                    definition.confirmCallback();
                }
            }
        });

        modal.present();

    }

    confirm(definition: ConfirmDefinition) {
        const modal = this.createModal(definition);

        modal.addButton({
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                if (definition.cancelCallback !== undefined) {
                    definition.cancelCallback();
                }
            }
        });

        modal.addButton({
            text: 'OK',
            handler: () => {
                if (definition.confirmCallback !== undefined) {
                    definition.confirmCallback();
                }
            }
        });

        modal.present();
    }

    selectSingleItem(definition: SelectSingleItemDefinition) {
        let alert = this.alertController.create(this.getModalOptions());

        alert.setTitle(definition.title);

        definition.list.forEach(l => {
            let checked = definition.selectedId !== undefined && definition.selectedId === l.id;

            alert.addInput({
                type: 'radio',
                label: l.displayText,
                value: l.id,
                checked: checked
            });
        });

        alert.addButton({
            text: 'Cancel',
            role: 'cancel',
        });

        alert.addButton({
            text: 'OK',
            handler: id => {
                definition.confirmCallback(id);
            }
        });

        alert.present();
    }

    contactSelect(params: BaseSelectParameters): Promise<number[]> {

        let contactSelect = this.modalController.create(ContactSelect, params, this.getModalOptions());
        contactSelect.present();

        return new Promise(resolve => {
            contactSelect.onWillDismiss((items: number[]) => resolve(items));
        });
    }


    outletSelect(params: BaseSelectParameters): Promise<number[]> {

        let outletSelect = this.modalController.create(OutletSelect, params, this.getModalOptions());
        outletSelect.present();

        return new Promise(resolve => {
            outletSelect.onWillDismiss((items: number[]) => resolve(items));
        });
    }

    groupSelect(params: BaseSelectParameters): Promise<number[]> {
        let groupSelect = this.modalController.create(GroupSelect, params, this.getModalOptions());
        groupSelect.present();

        return new Promise(resolve => {
            groupSelect.onWillDismiss((items: number[]) => resolve(items));
        });
    }

    mapView() {
        let modal = this.modalController.create(MapViewPage);
        modal.present();
    }

    customEmailDistributionEditorManualRecipientEdit(params: IForm<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionManualRecipientDto>) {
        let modal = this.modalController.create(EmailDistributionEditorManualRecipientEditPage, params, this.getModalOptions());
        modal.present();

        return new Promise(resolve => {
            modal.onWillDismiss(() => {
                resolve();
            });
        });
    }
}