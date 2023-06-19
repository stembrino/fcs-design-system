import React from "react";
import { SlotProductCardProps } from "./types";
import styles from "./styles.module.css";
import { variants } from "./variants";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const SlotProductCard: React.FC<SlotProductCardProps> = ({
  size,
  variant,
  btnColor = "#422178",
  onClick,
}) => {
  // const cssVariables = {
  //   "--button-color": color,
  //   "--focus-color": focusColor,
  // };

  return (
    <div
      // style={{ width, ...cssVariables }}
      className={variants({ variant, size })}
      tabIndex={0}
    >
      <Header />
      <Main />
      <Footer btnColor={btnColor} />
    </div>
  );
};

export default SlotProductCard;
