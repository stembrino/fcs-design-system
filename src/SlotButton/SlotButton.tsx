import React from "react";
import { SlotButtonProps } from "./SlotButton.types";
import styles from "./SlotButton.module.css";
import { classNames } from "../util/util";

const DefaultButton: React.FC<SlotButtonProps> = ({
  label,
  rounded = false,
  size = "medium",
  width = "auto",
  border = false,
  onClick,
}) => {
  const roundedClass = rounded ? styles.rounded : "";
  const borderClass = border ? styles.border : "";

  return (
    <div
      style={{ width }}
      className={classNames(roundedClass, borderClass, styles[size], styles["button-wrapper"])}
      role="button"
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default DefaultButton;
