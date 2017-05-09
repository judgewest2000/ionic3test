import { IForm } from '../modelInterfaces/base';
import { BaseFormModel } from '../formmodels/base-formmodel';
import { TemplateGetHelper } from '../helpers/template-helper';
import { DataAccessService } from './data-access-service';

export abstract class BaseEntityService<T extends AIMC.Baltic.Dto.RestrictedVisibilityDtoRootBase> {

    constructor(private params: {
        baseFormModel: BaseFormModel<T>,
        dataAccessService: DataAccessService,
        endPoint: string,
        templateName: string,
    }) {

    }

    async get(id: number) {

        if (id === 0) {
            return TemplateGetHelper<T>(this.params.templateName);
        }

        let endPoint = this.params.endPoint;

        const item = await this.params.dataAccessService.get<T>(endPoint, { id: id });

        return item;

    }

    async getForm(id: number) {

        const data = await this.get(id);

        const myForm: IForm<T> = {
            viewModel: data,
            form: this.params.baseFormModel.create(data)
        };

        return myForm;

    }

    async save(item: IForm<T>) {
        
        let amalgamated = this.amalgamateToNewObject(item);

        let returnedItem = await this.params.dataAccessService.post<T>(this.params.endPoint, amalgamated);

        return returnedItem;
    }

    delete(item: T) {
        return new Promise<void>(resolve => {
            item.deleted = true;
            resolve();
        });
    }


    private amalgamateToNewObject(item: IForm<T>) {
        // source: https://codereview.stackexchange.com/questions/16306/how-to-optimize-merge-of-two-objects-that-include-arrays-of-objects
        // changed the lookups on id to ___uuid - search for ___uuid everywhere else
        function isArray(o) {
            return Object.prototype.toString.call(o) == "[object Array]";
        }

        // Assumes that target and source are either objects (Object or Array) or undefined
        // Since will be used to convert to JSON, just reference objects where possible
        function mergeObjects(target, source) {

            var item, tItem, o, idx;

            // If either argument is undefined, return the other.
            // If both are undefined, return undefined.
            if (typeof source == 'undefined') {
                return source;
            } else if (typeof target == 'undefined') {
                return target;
            }

            // Assume both are objects and don't care about inherited properties
            for (var prop in source) {
                item = source[prop];

                if (typeof item == 'object' && item !== null) {

                    if (isArray(item) && item.length) {

                        // deal with arrays, will be either array of primitives or array of objects
                        // If primitives
                        if (typeof item[0] != 'object') {

                            // if target doesn't have a similar property, just reference it
                            tItem = target[prop];
                            if (!tItem) {
                                target[prop] = item;

                                // Otherwise, copy only those members that don't exist on target
                            } else {

                                // Create an index of items on target
                                o = {};
                                for (var i = 0, iLen = tItem.length; i < iLen; i++) {
                                    o[tItem[i]] = true
                                }

                                // Do check, push missing
                                for (var j = 0, jLen = item.length; j < jLen; j++) {

                                    if (!(item[j] in o)) {
                                        tItem.push(item[j]);
                                    }
                                }
                            }
                        } else {
                            // Deal with array of objects
                            // Create index of objects in target object using ID property
                            // Assume if target has same named property then it will be similar array
                            idx = {};
                            tItem = target[prop]

                            for (var k = 0, kLen = tItem.length; k < kLen; k++) {
                                idx[tItem[k].___uuid] = tItem[k];
                            }

                            // Do updates
                            for (var l = 0, ll = item.length; l < ll; l++) {
                                // If target doesn't have an equivalent, just add it
                                if (!(item[l].___uuid in idx)) {
                                    tItem.push(item[l]);
                                } else {
                                    mergeObjects(idx[item[l].___uuid], item[l]);
                                }
                            }
                        }
                    } else {
                        // deal with object
                        mergeObjects(target[prop], item);
                    }

                } else {
                    // item is a primitive, just copy it over
                    target[prop] = item;
                }
            }
            return target;
        }

        let obj = JSON.parse(JSON.stringify(item.viewModel));

        let derrived = mergeObjects(obj, item.form.getRawValue()) as T;

        return derrived;
    }




}
