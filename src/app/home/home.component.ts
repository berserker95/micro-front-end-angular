import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { addInitListener, addContextUpdateListener } from '@luigi-project/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   title = 'Fake Bank';
   description = 'The bank that save your money';

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    addInitListener(initialContext => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    });
    addContextUpdateListener(updatedContext => {
      if (!this.ref['destroyed']) {
        this.ref.detectChanges();
      }
    });
  }
}
