import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentCodePage } from './payment-code';

@NgModule({
  declarations: [
    PaymentCodePage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentCodePage),
  ],
})
export class PaymentCodePageModule {}
