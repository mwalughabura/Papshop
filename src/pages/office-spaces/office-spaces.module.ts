import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeSpacesPage } from './office-spaces';

@NgModule({
  declarations: [
    OfficeSpacesPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeSpacesPage),
  ],
})
export class OfficeSpacesPageModule {}
