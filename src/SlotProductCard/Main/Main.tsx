import React from "react";
import styles from "./styles.module.css";
import { MainProps } from "./types";
import draw from "./assets/draw.svg";

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.base}>
      <div className={styles.title}>Nike Adapt BB</div>
      <img className={styles.draw} src={draw} />
      <div className={styles.details}>
        <span>$ 79</span>
        <span>Made for every athlete craving speed and efficiency</span>
      </div>
    </div>
  );
};

export default Main;
