import {
  IContact,
  IOrganizedContactList,
} from "../features/contacts/contactsInterface";
import { alphabetArray } from "./alphabetArray";

export function sortByLastName(contactsList: IContact[]) {
  return contactsList.sort((a, b) =>
    a.name.last.localeCompare(b.name.last, "en", { sensitivity: "base" })
  );
}
export function groupedContactsList(contactsList: IContact[]) {
  sortByLastName(contactsList).forEach((contact: IContact) => {
    let alphabet = contact.name.last.charAt(0).toLowerCase();
    alphabetArray.forEach(
      (alphabetItem: IOrganizedContactList, index: number) => {
        if (alphabetItem.alphabet === alphabet) {
          alphabetArray[index].record.push(contact);
        }
      }
    );
  });
  return alphabetArray;
}
