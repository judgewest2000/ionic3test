import { Injectable } from '@angular/core';


import { IContact } from '../modelInterfaces/IContact';

import { BaseEntityService } from './baseentity-service';

/*
  Generated class for the ReleaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ContactService extends BaseEntityService<IContact> {

    getBlank = () => {
        var blank: IContact = {
            id: 0,
            name: '',
            deleted: false,
            avatarUrl: '',
            outletName: ''
        };
        return blank;
    }

    constructor() {
        super();

        this.entities = [
            {
                name: 'Rashmi Madan',
                outletName: 'Ad Home',
                id: 94822,
                avatarUrl: 'https://pbs.twimg.com/profile_images/3163873995/aaa5f66f839cee2b7ffe553d6e72417a_bigger.jpeg',
                deleted: false
            },
            {
                name: 'Jasmine Birtles',
                outletName: 'MONEYMAGPIE',
                id: 136691,
                avatarUrl: 'https://pbs.twimg.com/profile_images/645731341204619264/15qDS2Xq_bigger.jpg',
                deleted: false
            },
            {
                name: 'Cheryl Hague',
                outletName: 'Derby Telegraph',
                id: 132256,
                avatarUrl: 'https://pbs.twimg.com/profile_images/378800000124078317/95096d42e09df3c8ee68b22b9fe37c4a_bigger.jpeg',
                deleted: false
            },
            {
                name: 'Derby Telegraph',
                outletName: 'Ad Home',
                id: 2309736,
                avatarUrl: 'https://pbs.twimg.com/profile_images/2178384330/3593720_bigger.jpg',
                deleted: false
            },
            {
                name: 'Adam Samson',
                outletName: 'Financial Times',
                id: 194718,
                avatarUrl: 'https://pbs.twimg.com/profile_images/378800000827092641/68e65fe7a688fc4314b33ffe172b6788_bigger.jpeg',
                deleted: false
            }
        ];
    }

}