import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyHelpPage } from './my-help';

@NgModule({
  declarations: [
    MyHelpPage,
  ],
  imports: [
    IonicPageModule.forChild(MyHelpPage),
  ],
})
export class MyHelpPageModule {}
