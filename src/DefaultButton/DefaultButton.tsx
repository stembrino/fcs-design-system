import React from "react";
import { DefaultButtonProps } from "./DefaultButton.types";
import "./DefaultButton.module.css";

const DefaultButton: React.FC<DefaultButtonProps> = ({ label }) => {
  return <div role="button">{label}</div>;
};

export default DefaultButton;
