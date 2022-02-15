import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
