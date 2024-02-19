import classes from "./Title.module.css";

export default function Title({ text }) {
  return (
    <div>
      <p className={classes.title}>{text}</p>
    </div>
  );
}
