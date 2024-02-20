import classes from "./SetOrigin.module.css";
import icon from "../../../assests/adjust-icons.png";

export default function SetOrigin() {
  return (
    <div className={classes.container}>
      <div></div>
      <div className={classes.wrapper}>
        <img src={icon} alt="" />
        <p>Set Transform Origin</p>
      </div>
      <div></div>
    </div>
  );
}
