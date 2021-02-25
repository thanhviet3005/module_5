import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HackerNewCreateComponent } from './hacker-new-create/hacker-new-create.component';
import { HackerNewsUpdateComponent } from './hacker-news-update/hacker-news-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewCreateComponent,
    HackerNewsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
