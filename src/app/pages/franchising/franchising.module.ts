import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FranchisingPageRoutingModule } from './franchising-routing.module';

import { FranchisingPage } from './franchising.page';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FranchisingPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [FranchisingPage],
})
export class FranchisingPageModule {}
