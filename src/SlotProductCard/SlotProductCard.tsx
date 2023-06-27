import React from "react";
import { SlotProductCardProps } from "./types";
import styles from "./styles.module.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { classNames } from "../common/util";
import { CSSProperties } from "../common/types";

const SlotProductCard: React.FC<SlotProductCardProps> = ({
  color = "#000000",
  src,
  border = true,
  like = false,
}) => {
  const cssProperties: CSSProperties = {
    "--border-color": color,
  };

  const borderClassName = border ? styles.border : "";

  return (
    <div
      style={{ ...cssProperties }}
      className={classNames(styles.base, borderClassName)}
      tabIndex={0}
    >
      <Header heartColor={color} like={like} />
      <Main imageSrc={src} backgroundSVGColor={color} />
      <Footer btnColor={color} />
    </div>
  );
};

export default SlotProductCard;
