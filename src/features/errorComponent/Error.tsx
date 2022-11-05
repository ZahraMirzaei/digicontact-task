import classes from "./Error.module.scss";

interface Props {
  message?: string;
}

const Error: React.FC<Props> = ({ message }) => {
  return (
    <div className={classes.errorContainer}>
      <p className={classes.errorText}>Sorry, something went wrong</p>
      <p className={classes.errorTitle}>{message}</p>
    </div>
  );
};

export default Error;
