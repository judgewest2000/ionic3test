import { Injectable } from '@angular/core';

import { BaseEntityService } from './baseentity-service';

import { EmailDistributionFormModel } from '../formmodels/emaildistribution-formmodel';

import { DataAccessService } from './data-access-service';

@Injectable()
export class EmailDistributionService extends BaseEntityService<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto> {


  constructor(emailDistributionFormModel: EmailDistributionFormModel, private dataAccessService: DataAccessService) {
    super({
      baseFormModel: emailDistributionFormModel,
      dataAccessService: dataAccessService,
      endPoint: 'emaildistribution',
      templateName: 'emaildistribution'
    });


  }

  async get(id: number) {
    if (id === 0) {
      return await super.get(id);
    }

    let item = await this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto>('emaildistribution/byrelease', { id: id });

    return item;

  }

  async getAncillary() {

    let all = await Promise.all(
      [
        this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionClientDetailsDto>('emaildistribution/emaildistributionclientdetails'),
        this.dataAccessService.post<AIMC.Baltic.Dto.MediaDatabase.EmailTemplateDto[]>('emailtemplate/find', { take: 5000 })
      ]);

    return all;

  }


}
