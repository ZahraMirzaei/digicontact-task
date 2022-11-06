import { IContact } from "../features/contacts/contactsInterface";

export interface IServerResponse {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: IContact[];
}
