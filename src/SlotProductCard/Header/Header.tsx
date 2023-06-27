import React from "react";
import styles from "./styles.module.css";
import { HeaderProps } from "./types";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";

const Header: React.FC<HeaderProps> = ({ heartColor, like }) => {
  const heartIcon = like ? mdiHeart : mdiHeartOutline;

  return (
    <div className={styles.base}>
      <Icon className={styles["heart-icon"]} path={heartIcon} size={1} color={heartColor} />
    </div>
  );
};

export default Header;
