import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriserComponent } from './priser/priser.component';
import { HvemerviComponent } from './hvemervi/hvemervi.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    PriserComponent,
    HvemerviComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
