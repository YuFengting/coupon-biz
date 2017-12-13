import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanPaymentPage } from './scan-payment';

@NgModule({
  declarations: [
    ScanPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanPaymentPage),
  ],
})
export class ScanPaymentPageModule {}
