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
      <div className={styles["info"]}>
        <h2>{props.name}</h2>
        {props.image ? (
          props.image
        ) : (
          <Image
            src={MYCSLogo}
            alt="MYCS Logo"
            width={200}
            height={200}
            className={styles["image"]}
          ></Image>
        )}
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default ScheduleItem;
