import React, { useState } from "react";
import Link from "next/link";

import styles from "../../styles/navigation/NavLinks.module.css";

function NavLinks(props) {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showLearn, setShowLearn] = useState(false);

  function handleShowAboutUs() {
    setShowAboutUs((prevState) => !prevState);
  }

  function handleShowLearn() {
    setShowLearn((prevState) => !prevState);
  }

  function disableAboutUs() {
    setShowAboutUs(false);
    if (props.onClick()) {
      props.onClick();
    }
  }

  function disableLearn() {
    setShowLearn(false);
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <>
      <Link passHref href="/">
        <h2
          className={styles["navLink"]}
          style={props.style}
          onClick={props.onClick}
        >
          Home
        </h2>
      </Link>
      <div className={`${styles["drop-down"]}`}>
        <h2 onClick={handleShowLearn}>Learn</h2>
        {showLearn && (
          <ul className={`${styles["drop-down-list"]}`}>
            <Link passHref href="/learn/the-problem">
              <li onClick={disableLearn}>The Problem</li>
            </Link>
            <Link passHref href="/learn/the-science">
              <li onClick={disableLearn}>The Science</li>
            </Link>
            <Link passHref href="/learn/the-solutions">
              <li onClick={disableLearn}>The Solutions</li>
            </Link>
          </ul>
        )}
      </div>
      <Link passHref href="/schedule">
        <h2
          className={styles["navLink"]}
          style={props.style}
          onClick={props.onClick}
        >
          Summit Schedule
        </h2>
      </Link>
      <Link passHref href="/art-contest">
        <h2
          className={styles["navLink"]}
          style={props.style}
          onClick={props.onClick}
        >
          Art Contest
        </h2>
      </Link>
      <Link passHref href="/sponsors">
        <h2
          className={styles["navLink"]}
          style={props.style}
          onClick={props.onClick}
        >
          Sponsors
        </h2>
      </Link>
      <div className={`${styles["drop-down"]}`}>
        <h2 onClick={handleShowAboutUs}>About Us</h2>
        {showAboutUs && (
          <ul className={`${styles["drop-down-list"]}`}>
            <Link passHref href="/about-us/message">
              <li onClick={disableAboutUs}>A Message From the Co-Presidents</li>
            </Link>
            <Link passHref href="/about-us/meet-the-team">
              <li onClick={disableAboutUs}>Meet the Team</li>
            </Link>
            <Link passHref href="/about-us/contact">
              <li onClick={disableAboutUs}>Contact Us</li>
            </Link>
          </ul>
        )}
      </div>
      <Link passHref href="/timeline">
        <h2
          className={styles["navLink"]}
          style={props.style}
          onClick={props.onClick}
        >
          Timeline
        </h2>
      </Link>
    </>
  );
}

export default NavLinks;
