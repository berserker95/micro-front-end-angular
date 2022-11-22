import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Sample2Component } from './sample2/sample2.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentSummaryComponent,
    Sample2Component
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
