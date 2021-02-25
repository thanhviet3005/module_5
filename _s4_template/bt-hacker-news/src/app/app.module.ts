import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HackerNewBtComponent } from './hacker-new-bt/hacker-new-bt.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewBtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
