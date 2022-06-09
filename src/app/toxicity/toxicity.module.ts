import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToxicityRoutingModule } from './toxicity-routing.module';
import { ToxicityComponent } from './toxicity.component';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToxicityComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    ChartModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputTextareaModule,
    ToxicityRoutingModule
  ]
})
export class ToxicityModule {}
