import classes from "./IconBox.module.css";

export default function IconBox({ icon01, icon02 }) {
  return (
    <div className={classes.iconBox}>
      <img src={icon01} alt="" />
      <img src={icon02} alt="" />
    </div>
  );
}
