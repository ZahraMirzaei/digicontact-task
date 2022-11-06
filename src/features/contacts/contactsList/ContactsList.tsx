import { useState } from "react";
import { ContactCard } from "../contactCard/ContactCard";
import { useShowCard } from "../contactCard/showCardContext";
import { IContact } from "../contactsInterface";
import classes from "./ContactsList.module.scss";

interface Props {
  contacts: IContact[];
}
const ContactsList: React.FC<Props> = ({ contacts }) => {
  const { isVisible, setVisibleHandler } = useShowCard();
  const [selectedContact, setSelectedContact] = useState<IContact>();
  let contactsList = null;

  function onContactClickHandler(contact: IContact) {
    setSelectedContact(contact);
    setVisibleHandler(true);
  }

  if (!contacts) {
    contactsList = (
      <p className={classes.noContacts}>There are no contact(s) to show!</p>
    );
  } else {
    contactsList = contacts.map((contact: IContact) => (
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
