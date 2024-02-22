import { Title } from "../../Atoms";
import classes from "./Origin.module.css";
import Position from "./Position/Position";

export default function Origin() {
  return (
    <div className={classes.container}>
      <Title text="Perspective Origin" />
      <div className={classes.flexBox}>
        <div className={classes.box}>
          <div className={classes.flexItems}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M1 9V2.37143C1 1.68571 1.45714 1 2.37143 1H9"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="6.5" cy="6.5" r="1.5" fill="white" />
            </svg>
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M9 1H1"
                stroke="#0CF5FF"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="5" cy="6.5" r="1.5" fill="#0CF5FF" />
            </svg>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M9 9V2.37143C9 1.68571 8.54286 1 7.62857 1H1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="3.5" cy="6.5" r="1.5" fill="white" />
            </svg>
          </div>
          <div className={classes.flexItems}>
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M1 9L1 1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="6.5" cy="5" r="1.5" fill="white" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.375 6C12.1679 6 12 6.16789 12 6.375V11.25H6.375C6.16789 11.25 6 11.4179 6 11.625C6 11.8321 6.16789 12 6.375 12H12V17.625C12 17.8321 12.1679 18 12.375 18C12.5821 18 12.75 17.8321 12.75 17.625V12H18.375C18.5821 12 18.75 11.8321 18.75 11.625C18.75 11.4179 18.5821 11.25 18.375 11.25H12.75V6.375C12.75 6.16789 12.5821 6 12.375 6Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 9L8 1" stroke="white" stroke-linecap="round" />
              <circle cx="2.5" cy="5" r="1.5" fill="white" />
            </svg>
          </div>
          <div className={classes.flexItems}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M1 1V7.62857C1 8.31429 1.45714 9 2.37143 9H9"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="6.5" cy="3.5" r="1.5" fill="white" />
            </svg>
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M9 8H1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="5" cy="2.5" r="1.5" fill="white" />
            </svg>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.3"
                d="M9 1V7.62857C9 8.31429 8.54286 9 7.62857 9H1"
                stroke="white"
                stroke-linecap="round"
              />
              <circle opacity="0.6" cx="3.5" cy="3.5" r="1.5" fill="white" />
            </svg>
          </div>
        </div>
        <div>
          <Position direction="Top" value="25">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.5 12C8.77614 12 9 12.2239 9 12.5V13.8991C9 14.4591 9 14.7391 9.10898 14.953C9.20485 15.1412 9.35782 15.2942 9.54596 15.3901C9.75986 15.4991 10.0399 15.4991 10.5999 15.4991L21.3999 15.4999C21.96 15.4999 22.24 15.4999 22.4539 15.391C22.6421 15.2951 22.7951 15.1421 22.891 14.9539C23 14.74 23 14.46 23 13.8999V12.5C23 12.2239 23.2239 12 23.5 12C23.7761 12 24 12.2239 24 12.5V19.4999C24 19.7761 23.7761 20 23.4999 20C23.2238 20 22.9999 19.7762 22.9999 19.5001L22.9995 18.0994C22.9993 17.5396 22.9992 17.2596 22.8902 17.0458C22.7943 16.8577 22.6414 16.7048 22.4532 16.6089C22.2394 16.4999 21.9594 16.4999 21.3996 16.4999L10.5996 16.4991C10.0393 16.4991 9.75922 16.4991 9.54526 16.6081C9.35706 16.704 9.20406 16.857 9.1082 17.0452C8.99922 17.2592 8.9993 17.5393 8.99946 18.0996L8.99986 19.4999C8.99994 19.7761 8.77609 20 8.49993 20C8.22383 20 8 19.7762 8 19.5001V12.5C8 12.2239 8.22386 12 8.5 12Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </Position>
          <Position direction="left" value="25">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22.5C12 22.2238 12.2239 22 12.5 22H13.8991C14.4591 22 14.7391 22 14.953 21.891C15.1412 21.7951 15.2942 21.6422 15.3901 21.454C15.4991 21.2401 15.4991 20.9601 15.4991 20.4001L15.4999 11.6001C15.4999 11.04 15.4999 10.76 15.391 10.546C15.2951 10.3578 15.1421 10.2049 14.9539 10.109C14.74 9.99997 14.46 9.99997 13.8999 9.99997H12.5C12.2239 9.99997 12 9.77611 12 9.49997C12 9.22383 12.2239 8.99997 12.5 8.99997H19.4999C19.7761 8.99997 20 9.22386 20 9.50004C20 9.77617 19.7762 10 19.5001 10.0001L18.0994 10.0005C17.5396 10.0007 17.2596 10.0008 17.0458 10.1098C16.8577 10.2056 16.7048 10.3586 16.6089 10.5467C16.4999 10.7606 16.4999 11.0405 16.4999 11.6004L16.4991 20.4004C16.4991 20.9606 16.4991 21.2407 16.6081 21.4547C16.704 21.6429 16.857 21.7959 17.0452 21.8918C17.2592 22.0008 17.5393 22.0007 18.0996 22.0005L19.4999 22.0001C19.7761 22 20 22.2239 20 22.5C20 22.7761 19.7762 23 19.5001 23H12.5C12.2239 23 12 22.7761 12 22.5Z"
                fill="white"
                fill-opacity="0.6"
              />
            </svg>
          </Position>
        </div>
      </div>
    </div>
  );
}
