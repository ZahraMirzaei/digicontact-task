import { alphabetArray } from "../../utils/alphabetArray";
import classes from "./AlphabetLabel.module.scss";

const AlphabetLabel = () => {
  return (
    <div className={classes.container}>
      {alphabetArray.map((alphabetItem) => (
        //todo: add number of item beside letter.
        <span className={classes.alphabetLetter} key={alphabetItem}>
          {alphabetItem}
        </span>
      ))}
    </div>
  );
};

export default AlphabetLabel;
