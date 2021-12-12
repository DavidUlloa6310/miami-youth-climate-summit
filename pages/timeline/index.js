import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/timeline/timeline.module.css";

function Timeline(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <section className={styles["timeline-section"]}>
      <h1 className={styles["title"]}>Past Years</h1>
      <div className={styles["timeline"]}>
        <ul>
          <li>
            <Link passHref href="timeline/2020">
              <div className={styles["timeline-content"]}>
                <Image
                  src={require("../../images/timeline/2020/ycsfinallogo.png")}
                  alt="Youth Climate Summit 2020 Logo"
                  height={300}
                  width={300}
                  objectFit="cover"
                ></Image>
                <h2>2020</h2>
              </div>
            </Link>
          </li>
          <li>
            <Link passHref href="timeline/2021">
              <div className={styles["timeline-content"]}>
                <Image
                  src={require("../../images/timeline/2021/MYCSlogo_no_bg.PNG")}
                  alt="Youth Climate Summit 2020 Logo"
                  height={300}
                  width={300}
                  objectFit="cover"
                ></Image>
                <h2>2021</h2>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["roots"]}>
        <Image
          alt="Roots"
          src={require("../../images/timeline/roots.svg")}
        ></Image>
      </div>
    </section>
  );
}

export default Timeline;
