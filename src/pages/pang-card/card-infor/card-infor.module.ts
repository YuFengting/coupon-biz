import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardInforPage } from './card-infor';

@NgModule({
  declarations: [
    CardInforPage,
  ],
  imports: [
    IonicPageModule.forChild(CardInforPage),
  ],
})
export class CardInforPageModule {}
