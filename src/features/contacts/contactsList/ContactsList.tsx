import { useContact } from "../contactsContext";
import { IContact } from "../contactsInterface";
import classes from "./ContactsList.module.scss";
const ContactsList = () => {
  const { contactsList } = useContact();
  let contactList = null;

  if (!contactsList) {
    contactList = <div>loading</div>;
  } else {
    contactList = contactsList.map((contact: IContact) => (
      <li className={classes.contactItem} key={contact.phone}>
        <span>
          {contact.name.first}, {contact.name.last.toUpperCase()}
        </span>
      </li>
    ));
  }

  return (
    <div className={classes.contactsContainer}>{<ul>{contactList}</ul>}</div>
  );
};

export default ContactsList;
