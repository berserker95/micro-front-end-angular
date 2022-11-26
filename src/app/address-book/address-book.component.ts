import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Contacts } from '@model/interfaces';

import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit, OnDestroy {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    iban: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
  })

  private subscriptions = new Subscription();

  @ViewChild('dialogForm', {static: true}) dialogForm: ElementRef;

  title = 'Address Book';
  modalTitle = 'Add Contact';
  confirmButtonLabel = 'Save';
  tableHeader: Array<string> = ['Name', 'IBAN', 'Phone', 'Email', 'Actions'];
  contacts : Array<Contacts> = [];
  isEdit = false;
  editContactId: number;

  constructor(private http: HttpClient, private fb: FormBuilder) {}
  get dialog(): any {
    return this.dialogForm.nativeElement;
  }

  ngOnInit(): void {
      this.subscriptions.add(this.http.get<Observable<Contacts>>('http://localhost:3000/api/contacts').subscribe((data) => {
        this.contacts = data['data']['contacts'];
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
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

  addContact() {
    this.isEdit = false;
    this.modalTitle = 'Add Contact';
    this.confirmButtonLabel = 'Save';
    this.showModal();
  }

  editContact(index: number) {
    this.isEdit = true;
    this.modalTitle = 'Edit Contact';
    this.confirmButtonLabel = 'Update';
    this.editContactId = index;
    this.contactForm.controls["name"].setValue(this.contacts[index].name);
    this.contactForm.controls["iban"].setValue(this.contacts[index].iban);
    this.contactForm.controls["phone"].setValue(this.contacts[index].phone);
    this.contactForm.controls["email"].setValue(this.contacts[index].email);
    this.showModal();
  }

  removeContact(index: number) {
   this.contacts.splice(index, 1);
  }

  showModal() {
    this.dialog.classList.add('fd-dialog--active');
  }

  hideModal() {
    this.dialog.classList.remove('fd-dialog--active')
    this.contactForm.reset();
  }

  addNewContact() {
    var newContact = this.contactForm.value;
    newContact['id'] = this.contacts[this.contacts.length - 1].id + 1;
    this.contacts.push(newContact as Contacts);
  }

  saveEditContact() {
    this.contacts[this.editContactId] = {
      id: this.editContactId,
      name: this.contactForm.value.name,
      iban: this.contactForm.value.iban,
      phone: this.contactForm.value.phone,
      email: this.contactForm.value.email
    }
  }

  onSubmit() {
    this.isEdit ? this.saveEditContact() : this.addNewContact();
    this.hideModal();
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
      localStorage.clear();
  }


}
