import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Payments } from '@model/payment-summary';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
})
export class PaymentSummaryComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  tableHeader: Array<string> = ['Creation Date', 'Recipient', 'Reason', 'Quantity'];
  payments : Array<Payments> = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.http.get<Observable<Payments[]>>('http://localhost:3000/api/payments').subscribe((data) => {
      this.payments = data['data']['payments'];
    }));
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }
}
