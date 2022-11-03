import { useContact } from "../contactsContext";
import { IContact } from "../contactsInterface";
import classes from "./ContactsList.module.scss";
const ContactsList = () => {
  const { activeContactsList } = useContact();
  let contactsList = null;

  if (!activeContactsList) {
    contactsList = <div>loading</div>;
  } else {
    contactsList = activeContactsList.record.map((contact: IContact) => (
      <li className={classes.contactItem} key={contact.id.value}>
        <span>
          {contact.name.first}, {contact.name.last.toUpperCase()}
        </span>
      </li>
    ));
  }

  return (
    <div className={classes.contactsContainer}>{<ul>{contactsList}</ul>}</div>
  );
};

export default ContactsList;
