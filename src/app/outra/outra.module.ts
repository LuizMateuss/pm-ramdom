import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutraPageRoutingModule } from './outra-routing.module';

import { OutraPage } from './outra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutraPageRoutingModule
  ],
  declarations: [OutraPage]
})
export class OutraPageModule {}
