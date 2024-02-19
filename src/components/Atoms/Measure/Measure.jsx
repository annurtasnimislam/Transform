import classes from "./Measure.module.css";

export default function Measure(props) {
  return (
    <div className={classes.wrapper}>
      <p>{props.axis}</p>
      <p>{props.value}</p>
      <p>{props.unit}</p>
    </div>
  );
}
