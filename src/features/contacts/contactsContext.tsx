import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { groupedContactsList } from "../../utils/organizedData";
import {
  IContact,
  IContactsContext,
  IOrganizedContactList,
} from "./contactsInterface";
import { ILabelInfo } from "../label/labelInterface";

const contactsContext = createContext<IContactsContext | null>(null);

function useContact() {
  const contacts = useContext(contactsContext);
  if (contacts == null) {
    throw new Error("useContact must be used within a ContactsProvider");
  }
  return contacts;
}

const ContactsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const contactsListRef = useRef<IOrganizedContactList[]>();
  const labelInfoRef = useRef<ILabelInfo[]>();
  const [activeLetter, setActiveLetter] = useState("a");
  const [activeContactsList, setActiveContactsList] =
    useState<IOrganizedContactList | null>(null);

  const setContactsListHandler = useCallback((contactsList: IContact[]) => {
    if (contactsList.length) {
      contactsListRef.current = groupedContactsList(contactsList);
      labelInfoRef.current = contactsListRef.current.map(
        (contact: IOrganizedContactList) => ({
          alphabetLetter: contact.alphabet,
          recordsLength: contact.record.length,
        })
      );
    }
  }, []);

  const setActiveLetterHandler = useCallback((letter: string) => {
    setActiveLetter(letter); //TODO: ask about use state after set in this function.
    const filteredContactsList = contactsListRef.current!.filter(
      (contactsList) => contactsList.alphabet === letter
    );
    if (filteredContactsList.length > 0) {
      setActiveContactsList(filteredContactsList[0]);
    }
  }, []);

  const value: IContactsContext = {
    activeContactsList,
    activeLetter,
    alphabetInfo: labelInfoRef.current,
    setActiveLetterHandler,
    setContactsListHandler,
  };

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  );
};

export { useContact, ContactsProvider };
