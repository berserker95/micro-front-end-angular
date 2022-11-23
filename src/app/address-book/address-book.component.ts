import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Contacts } from '@model/interfaces';

@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();

  title = 'Address Book';
  tableHeader: Array<string> = ['Name', 'IBAN', 'Phone', 'Email', 'Actions'];
  contacts : Array<Contacts> = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.subscriptions.add(this.http.get<Observable<Contacts>>('http://localhost:3000/api/contacts').subscribe((data) => {
        this.contacts = data['data']['contacts'];
      }))
  }

  setAriaHidden(elementId: number, value: string) {
    let elementRef = document.getElementById(elementId.toString());
    if (elementRef) {
        elementRef.setAttribute('aria-hidden', value);
    } else {
        console.warn("No element with id='" + elementId + "' found");
    }
}

   onPopoverClick(id: number) {
    let elementRef = document.getElementById(id.toString());
    let toggle = elementRef.getAttribute('aria-hidden');
    // I didn't use ?: because of IE 11 support
    if(toggle == 'true') {
        toggle='false';
    } else {
        toggle='true';
    }
    this.setAriaHidden(id, toggle);
}


  removeContact(index: number) {
   this.contacts.splice(index, 1);
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }


}
