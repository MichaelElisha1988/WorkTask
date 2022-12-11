import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LogInPageComponent, LoggedInPageComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
