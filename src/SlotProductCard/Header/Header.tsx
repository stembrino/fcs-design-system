import React from "react";
import styles from "./styles.module.css";
import { HeaderProps } from "./types";
import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles.base}>
      <Icon path={mdiHeartOutline} size={1} />
    </div>
  );
};

export default Header;
