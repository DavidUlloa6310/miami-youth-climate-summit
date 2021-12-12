import React, { useState } from "react";
import Link from "next/link";

import styles from "../../styles/navigation/NavLinks.module.css";

function NavLinks(props) {
  const [showDrawer, setShowDrawer] = useState(false);

  function handleDrawer() {
    setShowDrawer((prevState) => !prevState);
  }

  return (
    <>
      <Link passHref href="/">
        <h2 className={styles["navLink"]} style={props.style}>
          Home
        </h2>
      </Link>
      <Link passHref href="/learn">
        <h2 className={styles["navLink"]} style={props.style}>
          Learn
        </h2>
      </Link>
      <Link passHref href="/schedule">
        <h2 className={styles["navLink"]} style={props.style}>
          Summit Schedule
        </h2>
      </Link>
      <Link passHref href="/art-contest">
        <h2 className={styles["navLink"]} style={props.style}>
          Art Contest
        </h2>
      </Link>
      <Link passHref href="/sponsors">
        <h2 className={styles["navLink"]} style={props.style}>
          Sponsors
        </h2>
      </Link>
      <div className={`${styles["drop-down"]} ${showDrawer ? "show" : ""}`}>
        <h2 onClick={handleDrawer}>About Us</h2>
        <ul className={`${styles["drop-down-list"]}`}>
          <Link passHref href="/about-us/message">
            <li>A Message From the Co-Presidents</li>
          </Link>
          <Link passHref href="/about-us/meet-the-team">
            <li>Meet the Team</li>
          </Link>
          <Link passHref href="/about-us/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <Link passHref href="/timeline">
        <h2 className={styles["navLink"]} style={props.style}>
          Timeline
        </h2>
      </Link>
    </>
  );
}

export default NavLinks;
