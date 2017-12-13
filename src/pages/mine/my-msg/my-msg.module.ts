import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMsgPage } from './my-msg';

@NgModule({
  declarations: [
    MyMsgPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMsgPage),
  ],
})
export class MyMsgPageModule {}
