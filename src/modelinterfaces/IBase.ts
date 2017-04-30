import { FormGroup } from '@angular/forms';

export interface IBase {
    id: number;
    deleted: boolean;
    name: string;
}

export interface IForm<T extends IBase> {
    viewModel: T,
    form: FormGroup
}

export interface ISearch{
    id: number;
    name: string;
    description: string;
    imageUrl?: string;
}
