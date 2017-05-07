import { ReleaseService } from './../../providers/release-service';
import { EmailDistributionService } from './../../providers/email-distribution-service';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ModalService } from '../../providers/modal-service';
import { BaseEdit } from '../base-edit/base-edit';


@IonicPage({
  segment: 'email-distribution-edit/:id'
})
@Component({
  selector: 'page-email-distribution-edit',
  templateUrl: 'email-distribution-edit.html'
})
export class EmailDistributionEdit extends BaseEdit<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto> {

  release: AIMC.Baltic.Dto.MediaDatabase.ReleaseDto;
  emailDistributionClientDetails: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionClientDetailsDto;
  emailTemplates: AIMC.Baltic.Dto.MediaDatabase.EmailTemplateDto[];

  everythingLoaded = false;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private emailDistributionService: EmailDistributionService,
    private releaseService: ReleaseService,
    private modalService: ModalService) {

    super({
      navCtrl: navCtrl,
      navParams: navParams,
      modalService: modalService,
      baseEntityService: emailDistributionService,
      entityTitle: 'Email Distribution'
    });

    this.loadAll(navParams.get('id') as number);

  }

  async loadAll(id: number) {
    this.modalService.turnOnLoading();

    let all = await Promise.all([
      super.get(id),
      this.releaseService.get(id),
      this.emailDistributionService.getAncillary()
    ]);

    this.release = all[1];
    this.emailDistributionClientDetails = all[2][0];
    this.emailTemplates = all[2][1];

    this.everythingLoaded = true;
    this.modalService.turnOffLoading();

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailDistributionEdit');
  }

}
