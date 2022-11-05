import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
