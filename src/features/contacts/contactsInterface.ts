export interface IContact {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    postcode: string;
  };
  email: string;
  phone: string;
  login: {
    userName: string;
  };
  picture: string;
}

export interface IContactsContext {
  contactsList: IContact[] | null;
  setContactsListHandler: (contactsList: IContact[]) => void;
}
