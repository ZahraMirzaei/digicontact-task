import { ILabelInfo } from "../label/labelInterface";
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
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface IOrganizedContactList {
  alphabet: string;
  record: IContact[];
}

export interface IContactsContext {
  activeContactsList: IOrganizedContactList | null;
  activeLetter: string;
  alphabetInfo: ILabelInfo[] | undefined;
  setActiveLetterHandler: (letter: string) => void;
  setContactsListHandler: (contactsList: IContact[]) => void;
}
