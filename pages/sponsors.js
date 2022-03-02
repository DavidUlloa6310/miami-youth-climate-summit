import React, { useEffect } from "react";
import Image from "next/dist/client/image";

import styles from "../styles/sponsors/sponsors.module.css";

function Sponsors(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <section className={styles["sponsors-section"]}>
      <h1>Here are our 2022 Sponsors!</h1>

      <h2>Our Stand For Ocean Sponsors</h2>
      <div className={styles["sponsors-grid"]}>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/ransom.jpg")}
            alt="Ransom Everglades School"
            height={300}
            width={800}
            layout="responsive"
          ></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/gulliver.png")}
            alt="Gulliver High School"
            height={300}
            width={600}
            layout="responsive"
          ></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/carrol.jpg")}
            alt="Carrollton School of the Sacred Heart"
            height={300}
            width={300}
            layout="responsive"
          ></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/cleo.png")}
            alt="CLEO Institute"
            height={300}
            width={300}
            layout="responsive"
          ></Image>
        </div>
      </div>

      <h2>Our Stand For Nature Sponsors</h2>
      <div className={styles["sponsors-grid"]}>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/Boxed Water logo.jpg")}
            alt="Boxed Water"
            layout="responsive"
          ></Image>
        </div>
      </div>

      <h2>Our Stand For Wildlife Sponsors</h2>
      <div className={styles["sponsors-grid"]}>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/nature.png")}
            alt="Forces of Nature"
            layout="responsive"
          ></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/vitabug.png")}
            alt="Vita Bug Juice"
            layout="responsive"
          ></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/cummins.jpg")}
            alt="Cummins and Cederberg"
            layout="responsive"
          ></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image
            src={require("../images/sponsors/Caplow+Manzano+Logo.png")}
            alt="Caplow Manzano"
            layout="responsive"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
