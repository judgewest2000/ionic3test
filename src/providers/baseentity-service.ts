import { IForm } from '../modelInterfaces/base';
import { BaseFormModel } from '../formmodels/base-formmodel';
import { TemplateGetHelper } from '../helpers/template-helper';
import { DataAccessService } from './data-access-service';

export abstract class BaseEntityService<T extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase> {

    constructor(private params: {
        baseFormModel: BaseFormModel<T>,
        dataAccessService: DataAccessService,
        endPoint: string,
        templateName: string,
    }) {

    }

    async get(id: number) {

        if (id === 0) {
            return TemplateGetHelper<T>(this.params.templateName);
        }

        let endPoint = this.params.endPoint;

        const item = await this.params.dataAccessService.get<T>(endPoint, { id: id });

        return item;

    }

    async getForm(id: number) {

        const data = await this.get(id);

        const myForm: IForm<T> = {
            viewModel: data,
            form: this.params.baseFormModel.create(data)
        };

        return myForm;

    }

    async save(item: IForm<T>) {

        let amalgamated = Object.assign({}, item.viewModel, item.form.getRawValue());

        let returnedItem = await this.params.dataAccessService.post<T>(this.params.endPoint, amalgamated);

        return returnedItem;
    }

    delete(item: T) {
        return new Promise<void>(resolve => {
            item.deleted = true;
            resolve();
        });
    }


}
