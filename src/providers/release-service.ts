import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { BaseEntityService } from './baseentity-service';

import { ReleaseFormModel } from '../formmodels/release-formmodel';

import { DataAccessService } from './data-access-service';

/*
  Generated class for the ReleaseService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ReleaseService extends BaseEntityService<AIMC.Baltic.Dto.MediaDatabase.ReleaseDto> {


  constructor(releaseFormModel: ReleaseFormModel, private dataAccessService: DataAccessService) {
    super({
      baseFormModel: releaseFormModel,
      dataAccessService: dataAccessService,
      endPoint: 'release',
      templateName: 'release'
    });
  }



}
