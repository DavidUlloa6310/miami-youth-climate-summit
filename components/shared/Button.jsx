import React from "react";

import styles from "../../styles/Shared/Button.module.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles["button"]} ${
        props.dark ? styles["dark"] : styles["light"]
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
