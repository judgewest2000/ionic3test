import { IBase, IForm, ISearch } from '../modelInterfaces/IBase';
import { BaseFormModel } from '../formmodels/base-formmodel';
import { StringHelper } from '../helpers/string-helper';

export abstract class BaseEntityService<T extends IBase> {

    protected entities: T[];

    protected abstract getBlank: () => T

    get(id: number) {
        return new Promise<T>((resolve, err) => {
            let item: T;

            if (id === 0) {
                item = this.getBlank();
            } else {
                item = this.entities.filter(r => r.id === id)[0];
            }

            resolve(item);
        });
    }

    async getForm(id: number) {

        const data = await this.get(id);

        const myForm: IForm<T> = {
            viewModel: data,
            form: this.baseFormModel.create(data)
        };

        return myForm;

    }

    save(item: T) {
        return new Promise<void>(resolve => {
            if (item.id === 0) {
                item.id = this.entities.map(r => r.id).sort().reverse()[0] + 1;
                this.entities.push(item);
            }
            resolve();
        });
    }

    delete(item: T) {
        return new Promise<void>(resolve => {
            item.deleted = true;
            resolve();
        });
    }

    search(searchTerm?: string) {
        return new Promise<ISearch[]>(resolve => {

            let items = this.entities
                .filter(e => !e.deleted);

            if (StringHelper.isNotNullOrWhiteSpace(searchTerm)) {
                searchTerm.split(' ').forEach(chunk => {
                    items = items.filter(i => StringHelper.contains(i.name, chunk));
                });
            }

            const mappedItems = items.map(e => <ISearch>({
                id: e.id,
                name: e.name,
            }))

            resolve(mappedItems);
        });
    }


    constructor(public baseFormModel: BaseFormModel<T>) {

    }

}
