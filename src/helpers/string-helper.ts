
import * as moment from 'moment';

export module StringHelper {

    export function contains(source: string, lookupValue: string): boolean {
        if (source === undefined || source === null) {
            return false;
        }

        return source.toLowerCase().indexOf(lookupValue.toLowerCase()) !== -1;
    }

    export function replaceAll(value: string, oldValue: any, newValue: any) {
        if (value === undefined || value === null) {
            return null;
        }
        return value.replace(new RegExp(oldValue, 'gi'), newValue);
    };

    export function isNotNullOrWhiteSpace(value: any) {
        return value !== undefined && value !== null && this.replaceAll(value, ' ', '').length !== 0;
    }

    export function isNullOrWhiteSpace(value: any) {
        return !this.isNotNullOrWhiteSpace(value);
    }

    export function formatDate(value: any) {
        return moment(value).format('DD-MMM-YYYY');
    }

    export function capitalizeFirstLetter(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    export function capitalizeFirstLetterEachWord(value: string) {
        return value.split(' ')
            .map(v => this.capitalizeFirstLetter(v))
            .join(' ');
    }

    export function isTrue(value: string) {

        if (this.isNullOrWhiteSpace(value)) {
            return false;
        }

        let lower = value.toLowerCase();

        let istrue = lower === '1' || lower === 'true' || lower === 'yes';

        return istrue;
    }
};