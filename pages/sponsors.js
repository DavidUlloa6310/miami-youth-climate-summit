import React, { useEffect } from "react";
import Image from "next/dist/client/image";

import styles from "../styles/sponsors/sponsors.module.css";

function Sponsors(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <section className={styles["sponsors-section"]}>
      <h1>Our 2022 Sponsors Will Be Posted Here Soon!</h1>
    </section>
  );
}

export default Sponsors;
