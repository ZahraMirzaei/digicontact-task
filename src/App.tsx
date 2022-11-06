import { useEffect, useState } from "react";
import ContactsList from "./features/contacts/contactsList/ContactsList";
import AlphabetLabel from "./features/label/AlphabetLabel";
import LoadingSpinner from "./features/loadingSpinner/LoadingSpinner";
import Error from "./features/errorComponent/Error";
import { getContacts } from "./api";
import { ShowCardContextProvider } from "./features/contacts/contactCard/showCardContext";
import { contactsGroupMaker } from "./utils/organizedData";
import { IOrganizeContactList } from "./features/contacts/contactsInterface";
import classes from "./scss/App.module.scss";

function App() {
  const [groupedContactsList, setGroupedContactsList] = useState(
    [] as IOrganizeContactList[]
  );
  const [selectedLetter, setSelectedLetter] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getContacts(200)
      .then((response) => {
        setIsLoading(false);
        const contactsGroup = contactsGroupMaker(response.data.results);

        setGroupedContactsList(contactsGroup);

        setSelectedLetter(() => {
          return contactsGroup
            ? contactsGroup.find((item) => item.records?.length > 0)?.alphabet
            : undefined;
        });
      })
      .catch((e) => {
        setIsLoading(false);
        setErrorMessage(e.message);
      });
  }, []);

  if (errorMessage) return <Error message={errorMessage} />;
  else if (isLoading) return <LoadingSpinner />;

  const activeContacts = groupedContactsList.filter(
    (item: IOrganizeContactList) => item.alphabet === selectedLetter
  )[0]?.records;

  return (
    <>
      <h1 className={classes.digiContact}>digiContact</h1>
      <div className={classes.mainContainer}>
        <ShowCardContextProvider>
          <AlphabetLabel
            activeLetter={selectedLetter}
            groupedContactsList={groupedContactsList}
            selectNewLetter={(letter: string) => setSelectedLetter(letter)}
          />
          <ContactsList contacts={activeContacts} />
        </ShowCardContextProvider>
      </div>
    </>
  );
}

export default App;
