import { FormControl } from '@angular/forms';

export interface IFormControlDefinition {
    title: string;
    formControlItem: FormControl;
    submitAttemptMade: boolean;
}

