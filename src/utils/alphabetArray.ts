import { IOrganizedContactList } from "../features/contacts/contactsInterface";

//created an array from english alphabet, based on Unicode character code.
const arrLength = Array.from(Array(26)).map((e, i) => i + 97);

export const alphabetArray: IOrganizedContactList[] = arrLength.map((x) => ({
  alphabet: String.fromCharCode(x),
  record: [],
}));
