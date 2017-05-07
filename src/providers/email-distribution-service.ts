import { Injectable } from '@angular/core';

import { BaseEntityService } from './baseentity-service';

import { EmailDistributionFormModel } from '../formmodels/emaildistribution-formmodel';

import { DataAccessService } from './data-access-service';
import { TemplateGetHelper } from "../helpers/template-helper";

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

  async getEmailDistributionClientDetails() {
    return await this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionClientDetailsDto>('emaildistribution/emaildistributionclientdetails');
  }

  async getEmailTemplates() {
    return await this.dataAccessService.post<AIMC.Baltic.Dto.MediaDatabase.EmailTemplateDto[]>('emailtemplate/find', { take: 5000 });
  }

  async get(id: number) {
    let endPoint = 'emaildistribution/byrelease';

    const item = await this.dataAccessService.get<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto[]>(endPoint, { id: id });

    if (item.length === 0) {
      return TemplateGetHelper<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto>('emaildistribution');
    }

    return item[0];

  }

}
