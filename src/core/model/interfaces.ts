export interface Payments {
  id: number;
  creationDate: string;
  recipient: string;
  reason: string;
  quantity: string;
}

export interface Contacts {
  id: number;
  name: string;
  email: string;
  phone: string;
  iban: string;
}
