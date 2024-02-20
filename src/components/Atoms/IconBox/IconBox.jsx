import classes from "./IconBox.module.css";

export default function IconBox({ children }) {
  return <div className={classes.iconBox}>{children}</div>;
}
