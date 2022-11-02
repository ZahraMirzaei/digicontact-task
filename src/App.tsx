import { useEffect } from "react";
import ContactsList from "./features/contacts/contactsList/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import { useContact } from "./features/contacts/contactsContext";
import { ContactCard } from "./features/contacts/contactCard/ContactCard";
import { getContacts } from "./api";
import "./App.css";

function App() {
  const contactContext = useContact();

  useEffect(() => {
    getContacts(100).then((response) => {
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
