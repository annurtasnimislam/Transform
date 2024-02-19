import classes from "./Header.module.css";
import transform from "../../../assests/transform.png";
import left from "../../../assests/reverse.left.png";
import toggle from "../../../assests/ON z.png";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.flexBox}>
        <img src={transform} alt="transform" className={classes.icon01} />
        <p>Transform</p>
      </div>
      <div className={classes.flexBox}>
        <img src={left} alt="reverse-left" className={classes.icon02} />
        <img src={toggle} alt="ON z" className={classes.icon03} />
      </div>
    </div>
  );
}
