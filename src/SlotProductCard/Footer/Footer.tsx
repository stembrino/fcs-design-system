import React from "react";
import styles from "./styles.module.css";
import { FooterProps } from "./types";
import { SlotButton } from "../..";

const Footer: React.FC<FooterProps> = ({ btnColor }) => {
  const handleOnClick = () => {
    console.log("handleOnClick");
  };

  return (
    <div className={styles.base}>
      <SlotButton label="Add to cart" width="100%" onClick={handleOnClick} color={btnColor} />
    </div>
  );
};

export default Footer;
