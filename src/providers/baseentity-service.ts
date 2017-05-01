import { IForm } from '../modelInterfaces/IBase';
import { BaseFormModel } from '../formmodels/base-formmodel';
import { TemplateGetHelper } from '../helpers/template-helper';
import { DataAccessService } from './data-access-service';

export abstract class BaseEntityService<T extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase> {

    constructor(private params: {
        baseFormModel: BaseFormModel<T>,
        dataAccessService: DataAccessService,
        endPoint: string,
        templateName: string
    }) {

    }

    async get(id: number) {

        if (id === 0) {
            return TemplateGetHelper<T>(this.params.templateName);
        }

        const item = await this.params.dataAccessService.get<T>(this.params.endPoint, { id: id });

        return item;

    }

    async getForm(id: number) {

        debugger;
        
        const data = await this.get(id);

        const myForm: IForm<T> = {
            viewModel: data,
            form: this.params.baseFormModel.create(data)
        };

        return myForm;

    }

    async save(item: T) {

        try {
            await this.params.dataAccessService.post(this.params.endPoint, item);
            return true;
        }
        catch (err) {
            return false;
        }
    }

    delete(item: T) {
        return new Promise<void>(resolve => {
            item.deleted = true;
            resolve();
        });
    }


}
