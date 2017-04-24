import { BaseDtoViewModel } from './basedtoviewmodel'
import { IContact } from '../modelinterfaces/IContact';


export class ContactDtoViewModel extends BaseDtoViewModel<IContact> implements IContact {

    name: string;
   
    avatarUrl: string;

    constructor(data: IContact) {
        super(data);
    }

}

