
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


};