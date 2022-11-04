import { useEffect } from "react";
import ContactsList from "./features/contacts/contactsList/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import { useContact } from "./features/contacts/contactsContext";
import { getContacts } from "./api";
import { ShowCardContextProvider } from "./features/contacts/contactCard/showCardContext";
import "./App.scss";

function App() {
  const { setContactsListHandler, setActiveLetterHandler } = useContact();

  useEffect(() => {
    getContacts(100).then((response) => {
      setContactsListHandler(response.data.results);
      setActiveLetterHandler("a");
    });
  }, [setContactsListHandler, setActiveLetterHandler]);

  return (
    <>
      <h1 className="digiContact">digiContact</h1>

      <div className="mainContainer">
        <ShowCardContextProvider>
          <AlphabetLabel />
          <ContactsList />
        </ShowCardContextProvider>
      </div>
    </>
  );
}

export default App;
