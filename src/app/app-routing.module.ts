import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { Sample2Component } from './sample2/sample2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'payment-summary', component: PaymentSummaryComponent },
  { path: 'sample2', component: Sample2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
