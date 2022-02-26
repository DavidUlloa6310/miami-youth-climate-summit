import React from "react";

import Image from "next/image";
import MYCSLogo from "../../images/index/youth-climate-summit.png";

import styles from "../../styles/shared/ScheduleItem.module.css";

function ScheduleItem(props) {
  if (props.announcement) {
    return (
      <div className={styles["schedule-item"]}>
        <h2 style={{ fontSize: "26px" }}>{props.announcement}</h2>
      </div>
    );
  }

  return (
    <div className={styles["schedule-item"]}>
      <div style={{ padding: "10px" }}>
        {props.image ? (
          props.image
        ) : (
          <Image
            src={MYCSLogo}
            alt="MYCS Logo"
            width={150}
            height={150}
            className={styles["image"]}
          ></Image>
        )}
      </div>
      <div className={styles["info"]}>
        <h2 className={styles["name"]}>{props.name}</h2>
        <h3 className={styles["title"]}>{props.title}</h3>
      </div>
    </div>
  );
}

export default ScheduleItem;
