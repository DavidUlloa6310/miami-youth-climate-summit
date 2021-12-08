import React from "react";
import { createPortal } from "react-dom";

import styles from "../../styles/shared/Modal.module.css";

import ScreenBackground from "./ScreenBackground";

function Modal(props) {
  const modal = (
    <>
      <div className={styles["modal"]} onClick={props.onClick}>
        {props.children}
      </div>
      <ScreenBackground onClick={props.onClick}></ScreenBackground>
    </>
  );

  return createPortal(modal, document.getElementById("modal-hook"));
}

export default Modal;
