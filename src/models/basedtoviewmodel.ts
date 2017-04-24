import { IBase } from '../modelinterfaces/IBase';

export abstract class BaseDtoViewModel<T extends IBase>{

    id: number;

    constructor(data: any) {

        for(let prop in data){
            this[prop] = data[prop];
        }

    }

}
