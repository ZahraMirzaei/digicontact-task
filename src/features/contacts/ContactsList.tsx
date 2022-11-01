import { useContact } from "./contactsContext";
import classes from "./ContactsList.module.scss";
const ContactsList = () => {
  const contactCtx = useContact();
  let contactList = null;

  if (!contactCtx?.contactsList) {
    contactList = <div>loading</div>;
  } else {
    contactList = contactCtx?.contactsList.map((contact) => (
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
