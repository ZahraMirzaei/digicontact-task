import { useContact } from "../contacts/contactsContext";
import { useShowCard } from "../contacts/contactCard/showCardContext";
import classes from "./AlphabetLabel.module.scss";

const AlphabetLabel = () => {
  const { alphabetInfo, activeLetter, setActiveLetterHandler } = useContact();
  const { setVisibleHandler } = useShowCard();

  const onClickHandler = (letter: string) => {
    setActiveLetterHandler(letter);
    setVisibleHandler(false);
  };
  return (
    <ul className={classes.container}>
      {alphabetInfo
        ? alphabetInfo.map(({ alphabetLetter, recordsLength }) => {
            return (
              <li
                className={`${classes.alphabetLetter}
                ${!recordsLength ? classes.disableLetter : ""}
                ${alphabetLetter === activeLetter ? classes.activeLetter : ""}
                `}
                key={alphabetLetter}
                onClick={() => onClickHandler(alphabetLetter)}
              >
                <span>{alphabetLetter}</span>
                <span className={classes.recordLength}>{recordsLength}</span>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default AlphabetLabel;
