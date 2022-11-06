import axios from "axios";
import { IServerResponse } from "./responseInterfaces";

export const getContacts = (
  number: number = 100,
  includingFields: string = "name, location, email, login, phone, picture, id",
  nationality: string = "us"
) =>
  axios.get<IServerResponse>("https://randomuser.me/api/", {
    params: {
      results: number,
      inc: includingFields,
      nat: nationality,
    },
  });
