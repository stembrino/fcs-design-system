import React from "react";
import { SlotButtonProps } from "./SlotButton.types";
import styles from "./SlotButton.module.css";
import { variants } from "./SlotButton.variants";
import { classNames } from "../common/util";

const DefaultButton: React.FC<SlotButtonProps> = ({
  label,
  rounded = false,
  size = "medium",
  width = "auto",
  theme = "primary",
  onClick,
}) => {
  const roundedClass = rounded ? styles.rounded : "";

  return (
    <div
      style={{ width }}
      className={variants({ size, theme, className: classNames(roundedClass) })}
      role="button"
      onClick={onClick}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default DefaultButton;
