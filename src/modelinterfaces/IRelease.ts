import { IBase } from './IBase';

export interface IRelease extends IBase {
    name: string;
    headline: string;
    subheading: string;
    displayDate: string;

    coreCopy: string;
}

