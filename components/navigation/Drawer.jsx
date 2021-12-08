import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "../../styles/navigation/Drawer.module.css";

function Drawer(props) {
  const drawer = (
    <CSSTransition
      in={props.show}
      timeout={{ enter: 200, exit: 200 }}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <div className={styles["drawer"]}>{props.children}</div>
    </CSSTransition>
  );
  return createPortal(drawer, document.getElementById("drawer-hook"));
}

export default Drawer;
