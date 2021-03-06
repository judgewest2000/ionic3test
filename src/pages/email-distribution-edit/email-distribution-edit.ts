import { ReleaseService } from './../../providers/release-service';
import { EmailDistributionService } from './../../providers/email-distribution-service';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController } from 'ionic-angular';
import { ModalService } from '../../providers/modal-service';
import { BaseRootEdit } from "../base-root-edit/base-root-edit";


@IonicPage({
  segment: 'email-distribution-edit/:id'
})
@Component({
  selector: 'page-email-distribution-edit',
  templateUrl: 'email-distribution-edit.html'
})
export class EmailDistributionEdit extends BaseRootEdit<AIMC.Baltic.Dto.MediaDatabase.EmailDistributionDto> {

  segment = 'main';

  release: AIMC.Baltic.Dto.MediaDatabase.ReleaseDto;
  emailDistributionClientDetails: AIMC.Baltic.Dto.MediaDatabase.EmailDistributionClientDetailsDto;
  //emailTemplates: AIMC.Baltic.Dto.MediaDatabase.EmailTemplateDto[];

  everythingLoaded = false;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private emailDistributionService: EmailDistributionService,
    private releaseService: ReleaseService,
    private modalService: ModalService,
    private modalController: ModalController) {

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
      this.emailDistributionService.getEmailDistributionClientDetails(),
      //this.emailDistributionService.getEmailTemplates()
    ]);

    this.release = all[1];
    this.emailDistributionClientDetails = all[2];
    //this.emailTemplates = all[3];
    this.everythingLoaded = true;
    this.modalService.turnOffLoading();

    if (this.item.viewModel.id === 0) {
      this.item.form.controls['sendFromName'].setValue(this.emailDistributionClientDetails.sendFromName);
      this.item.form.controls['sendFromEmailPrefix'].setValue(this.emailDistributionClientDetails.sendFromEmailDefault);
      this.item.form.controls['sendFromEmailDomain'].setValue(this.emailDistributionClientDetails.sendFromEmailDomain.split(',')[0].split('|')[0]);
      this.item.form.controls['sendFromReplyToDomain'].setValue(this.emailDistributionClientDetails.sendFromEmailDomain.split(',')[0].split('|').pop());
    }

  }


  updateSendFromEmailDomain() {

    let getListOfDomains = () => {
      let values = this.emailDistributionClientDetails.sendFromEmailDomain.split(',')
        .map(s => s.split('|')[0])
        .map(s => ({ id: s, displayText: s }));
      return values;
    };

    let getIndividual = (id: string) => {
      let split = this.emailDistributionClientDetails.sendFromEmailDomain.split(',');
      for (let i = 0; i < split.length; i++) {
        let current = split[i];
        if (current.split('|')[0] === id) {
          return {
            fromEmailDomain: current.split('|')[0],
            sendFromReplyToDomain: current.split('|').pop()
          };
        }
      }
    };

    this.modalService.selectSingleItem({
      title: 'Select From Domain',
      selectedId: this.item.form.controls['sendFromEmailDomain'].value,
      list: getListOfDomains(),
      confirmCallback: (id: string) => {
        let value = getIndividual(id);
        let form = this.item.form;
        form.controls['sendFromEmailDomain'].setValue(value.fromEmailDomain);
        form.controls['sendFromReplyToDomain'].setValue(value.sendFromReplyToDomain);
      }
    });
  }

  getFullEmailAddress() {
    return this.item.form.controls.sendFromName.value + ' (' +
      this.item.form.controls.sendFromEmailPrefix.value + '@' + 
      this.item.form.controls.sendFromEmailDomain.value + ')';
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailDistributionEdit');
  }

}
