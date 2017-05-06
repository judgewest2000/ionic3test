import { NavController, NavParams } from 'ionic-angular';
import { ModalService } from '../../providers/modal-service';
import { IForm, IFormControlDefinition } from '../../modelinterfaces/base';
import { FormControl } from '@angular/forms';
import { BaseEntityService } from '../../providers/baseentity-service';

export abstract class BaseEdit<T extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase> {

    item: IForm<T>;
    itemLoaded = false;

    constructor(private params: {
        navCtrl: NavController,
        navParams: NavParams,
        modalService: ModalService,
        baseEntityService: BaseEntityService<T>,
        entityTitle: string
    }) {
    }

    submitAttemptMade = false;

    createFormControlDefinition(title: string, formControlItem: FormControl) {
        return <IFormControlDefinition>{
            title: title,
            formControlItem: formControlItem,
            submitAttemptMade: this.submitAttemptMade
        };
    }

    async getUsingNavId() {
        this.params.modalService.turnOnLoading();
        let id = parseInt(this.params.navParams.get('id'));
        let form = await this.params.baseEntityService.getForm(id);
        this.item = form;
        this.itemLoaded = true;
        this.params.modalService.turnOffLoading();
    }

    delete() {
        this.params.modalService.confirm({
            title: 'Confirm Deletion',
            body: 'Confirm delete of this release',
            confirmCallback: () => {
                this.params.baseEntityService.delete(this.item.viewModel)
                    .then(() => {
                        this.params.navCtrl.pop();
                    });
            }
        });
    }

    async save() {

        this.submitAttemptMade = true;

        if (this.item.form.invalid) {
            this.params.modalService.alert({
                title: `Cannot save ${this.params.entityTitle}`,
                body: 'Please check all fields are valid'
            });
        } else {
            try {
                this.params.modalService.turnOnLoading();
                let release = await this.params.baseEntityService.save(this.item);
                this.item.viewModel = release;
                this.params.modalService.turnOffLoading();

                this.params.modalService.alert({
                    title: `${this.params.entityTitle} saved`,
                    body: `Your ${this.params.entityTitle} has been saved successfully`,
                    confirmCallback: () => {
                        this.params.navCtrl.pop();
                    }
                });

            } catch (ex) {
                this.params.modalService.alert({
                    title: `Issue saving your ${this.params.entityTitle}`,
                    body: `Error: ${JSON.stringify(ex)}: If this happens again please contact Vuelio Support`
                });
            }

        }
    }

    cancel() {
        this.params.navCtrl.pop();
    }


}