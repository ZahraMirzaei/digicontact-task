import { IContact } from "../contactsInterface";
import classes from "./ContactCard.module.scss";
import { useShowCard } from "../contactCard/showCardContext";

interface Props {
  contactInfo: IContact | null;
}
export const ContactCard: React.FC<Props> = ({ contactInfo }) => {
  const { isVisible, setVisibleHandler } = useShowCard();

  function onCloseClickHandler() {
    setVisibleHandler(false);
  }
  return (
    <>
      {contactInfo ? (
        <div
          className={`${classes.cardContainer}
          ${isVisible ? classes.showCard : ""}
        `}
        >
          <div className={classes.imgContainer}>
            <img
              src={contactInfo.picture.thumbnail}
              srcSet={`${contactInfo.picture.thumbnail} 500w, 
                      ${contactInfo.picture.medium} 1000w, 
                      ${contactInfo.picture.large} 1500w`}
              alt={contactInfo.login.username}
            />
          </div>
          <div className={classes.useName}>
            USERNAME &nbsp;{contactInfo.login.username}
          </div>
          <div className={classes.infoContainer}>
            <p className={classes.contactName}>
              {contactInfo.name.last}, {contactInfo.name.first.toLowerCase()}
            </p>
            <div className={classes.contactData}>
              <div>
                <span>e-mail</span>
                <span>{contactInfo.email}</span>
              </div>
              <div>
                <span>phone</span>
                <span>{contactInfo.phone}</span>
              </div>
              <div>
                <span>street</span>
                <span>
                  {contactInfo.location.street.number}{" "}
                  {contactInfo.location.street.name}
                </span>
              </div>
              <div>
                <span>city</span>
                <span>{contactInfo.location.city}</span>
              </div>
              <div>
                <span>state</span>
                <span>{contactInfo.location.state}</span>
              </div>
              <div>
                <span>postcode</span>
                <span>{contactInfo.location.postcode}</span>
              </div>
            </div>
          </div>
          <span className={classes.close} onClick={onCloseClickHandler}>
            ✖
          </span>
        </div>
      ) : null}
    </>
  );
};
