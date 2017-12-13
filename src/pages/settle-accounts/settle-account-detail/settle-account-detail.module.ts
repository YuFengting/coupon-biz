import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettleAccountDetailPage } from './settle-account-detail';

@NgModule({
  declarations: [
    SettleAccountDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SettleAccountDetailPage),
  ],
})
export class SettleAccountDetailPageModule {}
