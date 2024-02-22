import { Title } from "../../Atoms";
import classes from "./Edit.module.css";

export default function Edit({ title, gridNum, children, border }) {
  return (
    <div
      className={classes.wrapper}
      style={
        border
          ? {
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            }
          : {}
      }
    >
      <Title text={title} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridNum}, 1fr)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
