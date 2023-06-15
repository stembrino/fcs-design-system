import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.types";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";

const Header: React.FC<HeaderProps> = ({ onClick }) => {
  return (
    <div className={styles.base}>
      <Icon path={mdiHeartOutline} size={1} />
    </div>
  );
};

export default Header;
