import React from "react";

import styles from "../../../styles/about-us/member-card.module.css";

function memberCard(props) {
  return (
    <div className={styles["card"]}>
      <div className={styles["image-div"]}>{props.image}</div>
      <div className={styles["text"]}>
        <h3>{props.name}</h3>
        <p>{props.school}</p>
        {props.children}
      </div>
    </div>
  );
}

export default memberCard;
