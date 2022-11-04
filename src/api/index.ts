import axios from "axios";

export const getContacts = (
  number: number = 100,
  includingFields: string = "name, location, email, login, phone, picture, id",
  nationality: string = "us"
) =>
  axios.get("https://randomuser.me/api/", {
    params: {
      results: number,
      inc: includingFields,
      nat: nationality,
    },
  });
