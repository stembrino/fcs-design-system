import React from "react";
import { SlotProductCardProps } from "./types";
import styles from "./styles.module.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const SlotProductCard: React.FC<SlotProductCardProps> = ({ color = "#000000", src }) => {
  return (
    <div className={styles.base} tabIndex={0}>
      <Header heartColor={color} />
      <Main imageSrc={src} backgroundSVGColor={color} />
      <Footer btnColor={color} />
    </div>
  );
};

export default SlotProductCard;
