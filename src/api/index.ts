import axios from "axios";

export const getContacts = (
  number = 100,
  includingFields = "name, location, email, login, phone, picture, id",
  nationality = "us"
) =>
  axios.get("https://randomuser.me/api/", {
    params: {
      results: number,
      inc: includingFields,
      nat: nationality,
    },
  });
