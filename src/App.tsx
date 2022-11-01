import { useEffect } from "react";
import axios from "axios";
import ContactsList from "./features/contacts/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import { useContact } from "./features/contacts/contactsContext";
import "./App.css";

function App() {
  const contactContext = useContact();

  useEffect(() => {
    axios
      .get("https://randomuser.me/api", { params: { results: 100 } })
      .then((response) => {
        contactContext?.setContactsListHandler(response.data.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>digiContact</h1>
      <AlphabetLabel />
      <ContactsList />
    </div>
  );
}

export default App;
