import { useEffect } from "react";
import ContactsList from "./features/contacts/contactsList/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import { useContact } from "./features/contacts/contactsContext";
import { ContactCard } from "./features/contacts/contactCard/ContactCard";
import { getContacts } from "./api";
import "./App.css";

function App() {
  const { setContactsListHandler, setActiveLetterHandler } = useContact();

  useEffect(() => {
    getContacts(100).then((response) => {
      setContactsListHandler(response.data.results);
      setActiveLetterHandler("a");
    });
  }, [setContactsListHandler, setActiveLetterHandler]);

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
