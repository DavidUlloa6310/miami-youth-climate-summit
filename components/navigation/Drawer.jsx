import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "../../styles/navigation/Drawer.module.css";

function Drawer(props) {
  const drawer = <div className={styles["drawer"]}>{props.children}</div>;
  return createPortal(drawer, document.getElementById("drawer-hook"));
}

export default Drawer;
