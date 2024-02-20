import classes from "./ThreeD.module.css";

export default function ThreeD() {
  return (
    <div className={classes.wrapper}>
      <p>3D transformation</p>
      <svg
        width="40"
        height="32"
        viewBox="0 0 40 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 10C10.6863 10 8 12.6863 8 16C8 19.3137 10.6863 22 14 22H26C29.3137 22 32 19.3137 32 16C32 12.6863 29.3137 10 26 10H14ZM26 11C23.2386 11 21 13.2386 21 16C21 18.7614 23.2386 21 26 21C28.7614 21 31 18.7614 31 16C31 13.2386 28.7614 11 26 11Z"
          fill="white"
          fill-opacity="0.8"
        />
      </svg>
    </div>
  );
}
