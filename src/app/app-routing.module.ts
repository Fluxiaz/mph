import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HvemerviComponent } from './hvemervi/hvemervi.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PriserComponent } from './priser/priser.component';

const routes: Routes = [

  { path: 'hvemervi', component: HvemerviComponent },
  { path: 'priser', component: PriserComponent },
  { path: 'kontakt', component: KontaktComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
