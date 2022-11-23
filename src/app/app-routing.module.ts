import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { AddressBookComponent } from './address-book/address-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'payment-summary', component: PaymentSummaryComponent },
  { path: 'address-book', component: AddressBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
