import React from "react";
import { createPortal } from "react-dom";

import styles from "../../styles/shared/ScreenBackground.module.css";

function ScreenBackground(props) {
  const screenBackground = (
    <div className={styles["screen-background"]} onClick={props.onClick}></div>
  );
  return createPortal(
    screenBackground,
    document.getElementById("screen-background-hook")
  );
}

export default ScreenBackground;
