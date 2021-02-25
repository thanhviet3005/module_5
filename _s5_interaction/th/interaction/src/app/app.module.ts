import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CoundownTimerComponent } from './countdown-timer/coundown-timer.component';
import { CountdownTimerAliasComponent } from './countdown-timer-alias/countdown-timer-alias.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { CountdownTimerOnchangesComponent } from './countdown-timer-onchanges/countdown-timer-onchanges.component';
import { CountdownTimerEventAliasComponent } from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    CoundownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerGetSetComponent,
    CountdownTimerOnchangesComponent,
    CountdownTimerEventAliasComponent,
    RatingBarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
