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
  variant = "primary",
  color = "#304ffe",
  onClick,
}) => {
  const roundedClass = rounded ? styles.rounded : "";
  const cssVariables = {
    "--button-color": color,
  };

  return (
    <div
      style={{ width, ...cssVariables }}
      className={variants({ size, variant, className: classNames(roundedClass) })}
      role="button"
      onClick={onClick}
      data-color="pink"
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default DefaultButton;
