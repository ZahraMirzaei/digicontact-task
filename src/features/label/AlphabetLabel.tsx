import { useShowCard } from "../contacts/contactCard/showCardContext";
import { IOrganizeContactList } from "../contacts/contactsInterface";
import classes from "./AlphabetLabel.module.scss";

interface Props {
  activeLetter?: string;
  groupedContactsList: IOrganizeContactList[];
  selectNewLetter: (letter: string) => void;
}
const AlphabetLabel: React.FC<Props> = ({
  activeLetter,
  groupedContactsList,
  selectNewLetter,
}) => {
  const { setVisibleHandler } = useShowCard();

  const onClickHandler = (letter: string) => {
    selectNewLetter(letter);
    setVisibleHandler(false);
  };
  return (
    <ul className={classes.container}>
      {groupedContactsList
        ? groupedContactsList.map(({ alphabet, records }) => {
            return (
              <li
                className={`${classes.alphabetLetter}
                ${!records ? classes.disableLetter : ""}
                ${alphabet === activeLetter ? classes.activeLetter : ""}
                `}
                key={alphabet}
                onClick={() => onClickHandler(alphabet)}
              >
                <span>{alphabet}</span>
                <span className={classes.recordLength}>
                  {records?.length > 0 ? records.length : 0}
                </span>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default AlphabetLabel;
