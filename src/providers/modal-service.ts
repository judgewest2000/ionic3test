import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Loading } from 'ionic-angular';

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

    constructor(private alertController: AlertController, private loadingController: LoadingController) {

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
        let alert = this.alertController.create();

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

    
}