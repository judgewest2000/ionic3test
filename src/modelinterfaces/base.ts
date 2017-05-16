import { FormGroup, FormControl, FormArray } from '@angular/forms';



export interface ISearch {
    id: number;
    name: string;
    description1?: string;
    description2?: string;
    description3?: string;
    avatarUrl?: string;
}

export interface ILogin {
    ".expires": string;
    ".issued": string;
    access_token: string;
    client: string;
    clientLabels: string;
    contactTypes: string;
    expires: number;
    id: string;
    name: string;
    outletFieldsForVisibility: string;
    roles: string;
    subscribedDataArea: string;
    token_type: string;
    turnOnRebrand: string;
    userGroups: string;
    userName: string;
}

export interface IForm<T> {
    viewModel: T;
    form: FormGroup;
}

export interface IFormArray<T> {
    formArray: FormArray,
    array: T[]
}

export interface IFormControlDefinition {
    title: string;
    formControlItem: FormControl;
    submitAttemptMade: boolean;
}

