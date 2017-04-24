import { Injectable } from '@angular/core';

import { ReleaseDtoViewModel } from '../models/releasedtoviewmodel';

/*
  Generated class for the ReleaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ReleaseService {


  releases: ReleaseDtoViewModel[] = [
    new ReleaseDtoViewModel({
      id: 1,
      name: '1st ever release',
      headline: '1st ever headline',
      subheading: '1st ever subheading',
      displayDate: new Date('2017-06-01').toISOString(),
      coreCopy: `I have worked alongside Terry for 2 years.

During that time we have worked on two different projects, one of which I was lead front-end technical architect. 

I have witnessed Terry be able to interpret off fairly loose requirements deliver high-quality customer-facing web solutions. He can produce these solutions at an incredibly rapid rate yet at the same time produce code that is both optimised and human-readable.

He has a good eye for UI design which customers respond favourably to and makes what would otherwise seem like complex solutions deceptively simple looking. 

His ability to be a ‘good citizen’ with whatever technology stack is put before him is very admirable; not being afraid to learn new methodologies / stacks / patterns and deliver using them in full. 

He is also incredibly good at backend technologies with a wealth of knowledge of C# / n-tier / Database / Azure to name a few, and be able to create enterprise-grade solutions with them.

He has worked as the soul architect / developer on a business-critical in-house web application which is in use by a large team in London for managing the business’s information and assets that are directly sold to customers. This project was undertaken with ZERO maneuverer on deadlines, and didn’t just deliver, but over-delivered putting the solution about 3 weeks’ ahead of schedule. 

For the above project he had to do much liaising with the London team which demonstrated excellent communication skills both in person and via Skype meetings.

It has been an excellent experience working with him and I would very much appreciate being able to work together again in the future.

 `
    }),
    new ReleaseDtoViewModel({
      id: 2,
      name: '2nd ever release',
      headline: '2nd ever headline',
      subheading: '2nd ever subheading',
      displayDate: new Date('2017-06-27').toISOString(),
      coreCopy: `rgrgrg`
    }),
    new ReleaseDtoViewModel({
      id: 3,
      name: '3rd ever release',
      headline: '3rd ever headline',
      subheading: '3rd ever subheading',
      displayDate: new Date('2017-06-29').toISOString(),
      coreCopy: `efmkeowjfie`
    })
  ];


  get(id: number) {
    return this.releases.filter(r => r.id === id)[0];
  }

  constructor() {


  }


}
