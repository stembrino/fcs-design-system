import React from "react";
import { SlotProductCardProps } from "./types";
import styles from "./styles.module.css";
import { variants } from "./variants";
import Header from "./Header";

const SlotProductCard: React.FC<SlotProductCardProps> = ({ size, variant, onClick }) => {
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
      <Header
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
};

export default SlotProductCard;
