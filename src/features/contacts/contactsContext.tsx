import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { IContact, IContactsContext } from "./contactsInterface";

const contactsContext = createContext<IContactsContext | null>(null);

function useContact() {
  const contacts = useContext(contactsContext);
  if (contacts === null) {
    throw new Error("useContact must be used within a ContactsProvider");
  }
  return contacts;
}

const ContactsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contactsList, setContactsList] = useState<IContact[] | null>(null);

  const setContactsListHandler = useCallback((contactsList: IContact[]) => {
    if (contactsList) {
      setContactsList(contactsList);
    }
  }, []);

  const value: IContactsContext = {
    contactsList,
    setContactsListHandler,
  };

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  );
};

export { useContact, ContactsProvider };
