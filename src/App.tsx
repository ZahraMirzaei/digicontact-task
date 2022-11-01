import { useEffect } from "react";
import axios from "axios";
import ContactsList from "./features/contacts/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import { useContact } from "./features/contacts/contactsContext";
import "./App.css";
import { ContactCard } from "./features/contacts/ContactCard";

function App() {
  const contactContext = useContact();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/", {
        params: {
          results: 100,
          inc: "name, location, email, login, phone, picture, id",
          nat: "us",
        },
      })
      .then((response) => {
        contactContext?.setContactsListHandler(response.data.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>digiContact</h1>
      <AlphabetLabel />
      <div className="mainContainer">
        <ContactsList />
        <ContactCard />
      </div>
    </div>
  );
}

export default App;
