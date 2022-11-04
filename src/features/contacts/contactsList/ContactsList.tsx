import { useState } from "react";
import { ContactCard } from "../contactCard/ContactCard";
import { useContact } from "../contactsContext";
import { useShowCard } from "../contactCard/showCardContext";
import { IContact } from "../contactsInterface";
import classes from "./ContactsList.module.scss";
const ContactsList = () => {
  const { activeContactsList } = useContact();
  const { isVisible, setVisibleHandler } = useShowCard();
  const [selectedContact, setSelectedContact] = useState<IContact>();
  let contactsList = null;

  function onContactClickHandler(contact: IContact) {
    setSelectedContact(contact);
    setVisibleHandler(true);
  }

  if (!activeContactsList) {
    contactsList = <div>loading</div>;
  } else {
    contactsList = activeContactsList.record.map((contact: IContact) => (
      <li
        className={`${classes.contactItem} ${
          selectedContact?.id.value === contact.id.value && isVisible
            ? classes.selectedContact
            : ""
        }`}
        key={contact.id.value}
        onClick={(e) => onContactClickHandler(contact)}
      >
        <span>
          {contact.name.first}, {contact.name.last.toUpperCase()}
        </span>
        {isVisible && selectedContact?.id.value === contact.id.value ? (
          <ContactCard contactInfo={selectedContact} />
        ) : null}
      </li>
    ));
  }

  return (
    <div className={classes.contactsContainer}>
      <ul>{contactsList}</ul>
    </div>
  );
};

export default ContactsList;
