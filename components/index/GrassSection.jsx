import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";

import Button from "../shared/Button";

import styles from "../../styles/index/GrassSection.module.css";

function GrassSection(props) {
  return (
    <section className={styles["grass-section"]}>
      <div className={styles["text"]}>
        <h2>{"We're Here to Fight Climate Change"}</h2>
        <p>
          We aim to elevate the discussion on climate change from “What is it?”
          to “What can we do to stop it?” with engaging speakers and workshops.
          <br />
          Join us to learn about climate change from a global perspective.
        </p>
        <div className={styles["buttons"]}>
          <Link href="https://whova.com/portal/registration/mmycs_202102">
            <Button style={{ width: "200px", fontSize: "1.5em" }}>
              Register
            </Button>
          </Link>
        </div>
        <p className={styles["email"]}>miami.ycs@gmail.com</p>
      </div>
    </section>
  );
}

export default GrassSection;
