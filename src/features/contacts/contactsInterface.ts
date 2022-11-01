export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
  USERNAME: string;
}

// export interface IContactsList {
//   contactsList: IContact[] | null;
// }

export interface IContactsContext {
  contactsList: IContact[] | null;
  setContactsListHandler: (contactsList: IContact[]) => void;
}
