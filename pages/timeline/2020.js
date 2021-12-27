import React from "react";
import Image from "next/image";
import Link from "next/link";
import MemberCard from "../../components/about-us/meet-the-team/MemberCard";

import styles from "../../styles/timeline/2020.module.css";

function Year2020(props) {
  return (
    <section className={styles["section"]}>
      <h1 className={styles["title"]}>The 2020 Information Will Be Up Soon!</h1>
    </section>
  );
}

export default Year2020;
