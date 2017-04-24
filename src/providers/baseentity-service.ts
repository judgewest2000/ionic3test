import { IBase } from '../modelInterfaces/IBase';

export abstract class BaseEntityService<T extends IBase> {

    entities: T[];

    protected abstract getBlank: () => T

    get(id: number): T {
        if (id === 0) {
            return this.getBlank();
        }

        return this.entities.filter(r => r.id === id)[0];
    }

    save(item: T) {
        if (item.id === 0) {
            item.id = this.entities.map(r => r.id).sort().reverse()[0] + 1;
            this.entities.push(item);
        }
    }

    delete(item: T) {
        item.deleted = true;
    }

    constructor() { }

}
