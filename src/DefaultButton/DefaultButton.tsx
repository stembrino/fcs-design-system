import React from "react";
import { DefaultButtonProps } from "./DefaultButton.types";
import styles from "./DefaultButton.module.css";
import { classNames } from "../util/util";

const DefaultButton: React.FC<DefaultButtonProps> = ({ label }) => {
  return (
    <div role="button" className={classNames(styles["test-component"], "primary")}>
      {label}
    </div>
  );
};

export default DefaultButton;
