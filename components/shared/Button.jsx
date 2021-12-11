import React from "react";

import styles from "../../styles/shared/Button.module.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={`${styles["button"]} ${
        props.dark ? styles["dark"] : styles["light"]
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
