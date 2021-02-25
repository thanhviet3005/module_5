import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HackerNewsThComponent } from './hacker-news-th/hacker-news-th.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsThComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
