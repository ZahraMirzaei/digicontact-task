import { IContact } from "../features/contacts/contactsInterface";

interface IGroupedContacts {
  [key: string]: IContact[];
}

const englishAlphabets = Array.from(Array(26).keys()).map((i) =>
  String.fromCharCode(i + 97)
);

export function sortByLastName(contactsList: IContact[]) {
  return contactsList.sort((a, b) =>
    a.name.last.localeCompare(b.name.last, "en", { sensitivity: "base" })
  );
}

export function contactsGroupMaker(contacts: IContact[]) {
  const groupedContacts = {} as IGroupedContacts;
  contacts.forEach((item: IContact) => {
    const letter = item.name.last.charAt(0).toLowerCase();
    if (groupedContacts[letter])
      groupedContacts[letter] = [...groupedContacts[letter], item];
    else groupedContacts[letter] = [item];
  });
  return englishAlphabets.map((alphabet) => ({
    alphabet,
    records: groupedContacts[alphabet],
  }));
}

/**
 *  @return {
 * [
 * {
 *    alphabet:'a'
 *    records:[{name:{last:'alison', first:'sara'},...},{name:{last:'adam', first:'lisa'},...}]
 * },
 * {
 *    alphabet:'b',
 *    records:[{name:{last:'butler', first:'sara'},...},{name:{last:'bates', first:'lisa'},...}]
 * },
 * ...
 * ]
 * }
 */
