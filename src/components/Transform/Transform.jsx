import { IconBox, Measure } from "../Atoms";
import { Edit } from "../Molecules";
import Header from "./Header/Header";
import classes from "./Transform.module.css";
import lock from "../../assests/x-y lock-icons.png";
import rotateX from "../../assests/RotateX.png";
import rotateY from "../../assests/RotateY.png";
import zoomOut from "../../assests/zoomOut.png";
import zoomIn from "../../assests/expand-collaps-icons.png";

export default function Transform() {
  return (
    <div className={classes.container}>
      <div className={classes.innerWrapper}>
        <Header />
        <Edit title="Move" gridNum="2" border>
          <Measure axis="x" value="1000" unit="px" />
          <Measure axis="z" value="0" />
          <Measure axis="y" value="1000" unit="px" />
        </Edit>
        <Edit title="Rotate" gridNum="2" border>
          <Measure axis="x" value="46" unit="turn" />
          <Measure axis="z" value="0" unit="deg" />
          <Measure axis="y" value="0" unit="rad" />
          <IconBox icon01={rotateX} icon02={rotateY} />
        </Edit>
        <Edit title="Scale" gridNum="2" border>
          <Measure axis="x" value="8" />
          <Measure axis="z" value="8" />
          <Measure axis="y" value="8" />
          <IconBox icon01={zoomOut} icon02={zoomIn} />
          <img src={lock} alt="" className={classes.icon} />
        </Edit>
        <Edit title="skew" gridNum="2">
          <Measure axis="self" value="46" unit="px" />
          <Measure axis="child" value="205" unit="px" />
        </Edit>
        <Edit title="Distance" gridNum="3" border>
          <Measure axis="x" value="48" unit="deg" />
          <Measure axis="y" value="8" unit="deg" />
        </Edit>
      </div>
    </div>
  );
}
