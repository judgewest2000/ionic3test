import { BaseDtoViewModel } from './basedtoviewmodel'
import { IRelease } from '../modelinterfaces/IRelease';


export class ReleaseDtoViewModel extends BaseDtoViewModel<IRelease> implements IRelease {

    name: string;
    headline: string;
    subheading: string;
    displayDate: string;

    coreCopy: string;

    deleted: boolean;

    constructor(data: IRelease) {
        super(data);
    }

}

