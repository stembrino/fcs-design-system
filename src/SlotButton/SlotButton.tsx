import React from "react";
import { SlotButtonProps } from "./types";
import styles from "./styles.module.css";
import { variants } from "./variants";
import { classNames } from "../common/util";
import { CSSProperties } from "../common/types";

const DefaultButton: React.FC<SlotButtonProps> = ({
  label,
  rounded = false,
  size = "medium",
  width = "auto",
  variant = "primary",
  color = "#304ffe",
  ariaLabel = "Button",
  focusColor = "#1c1b1b",
  onClick,
}) => {
  const roundedClass = rounded ? styles.rounded : "";
  const cssProperties: CSSProperties = {
    "--button-color": color,
    "--focus-color": focusColor,
    width,
  };

  return (
    <div
      style={{ ...cssProperties }}
      className={variants({ size, variant, className: classNames(roundedClass) })}
      role="button"
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default DefaultButton;
