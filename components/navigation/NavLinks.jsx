import React from "react";
import Link from "next/link";

import styles from "../../styles/navigation/NavLinks.module.css";

function NavLinks(props) {
  return (
    <>
      <Link href="/">
        <h2 className={styles["navLink"]} style={props.style}>
          Home
        </h2>
      </Link>
      <Link href="/learn">
        <h2 className={styles["navLink"]} style={props.style}>
          Learn
        </h2>
      </Link>
      <Link href="/schedule">
        <h2 className={styles["navLink"]} style={props.style}>
          Summit Schedule
        </h2>
      </Link>
      <Link href="/art-contest">
        <h2 className={styles["navLink"]} style={props.style}>
          Art Contest
        </h2>
      </Link>
      <Link href="/sponsors">
        <h2 className={styles["navLink"]} style={props.style}>
          Sponsors
        </h2>
      </Link>
      <Link href="/about">
        <h2 className={styles["navLink"]} style={props.style}>
          About Us
        </h2>
      </Link>
      <Link href="/support">
        <h2 className={styles["navLink"]} style={props.style}>
          Support
        </h2>
      </Link>
    </>
  );
}

export default NavLinks;
