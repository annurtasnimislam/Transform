import classes from "./Position.module.css";

export default function Position(props) {
  return (
    <div className={classes.position}>
      {props.children}
      <p>{props.direction}</p>
      <p>{props.value}</p>
      <p>%</p>
    </div>
  );
}
