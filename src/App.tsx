import { useEffect, useState } from "react";
import { useContact } from "./features/contacts/contactsContext";
import { getContacts } from "./api";
import ContactsList from "./features/contacts/contactsList/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import { ShowCardContextProvider } from "./features/contacts/contactCard/showCardContext";
import LoadingSpinner from "./features/loadingSpinner/LoadingSpinner";
import Error from "./features/errorComponent/Error";
import "./App.scss";

function App() {
  const { activeContactsList, setContactsListHandler, setActiveLetterHandler } =
    useContact();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    setIsLoading(true);
    getContacts(100)
      .then((response) => {
        setContactsListHandler(response.data.results);
        setActiveLetterHandler("a");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setErrorMessage(e.message);
        setIsLoading(false);
        console.log(typeof e.message);
      });
  }, [setContactsListHandler, setActiveLetterHandler]);

  if (isError) {
    return <Error message={errorMessage} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (activeContactsList?.record.length) {
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
  } else {
    return null;
  }
}

export default App;
