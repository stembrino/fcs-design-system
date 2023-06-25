import React from "react";
import styles from "./styles.module.css";
import { MainProps } from "./types";
import BackgroundSVG from "./Background";

const Main: React.FC<MainProps> = ({ imageSrc, backgroundSVGColor }) => {
  return (
    <div className={styles.base}>
      <div className={styles.title}>Nike Adapt BBz/</div>
      <BackgroundSVG className={styles.draw} fill={backgroundSVGColor} />
      <img src={imageSrc} className={styles["product-image"]} />
      <div className={styles.details}>
        <span>$ 79</span>
        <span>Made for every athlete craving speed and efficiency</span>
      </div>
    </div>
  );
};

export default Main;
