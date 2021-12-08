import React, { useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import Cloud from "../../components/shared/Cloud";

import styles from "../../styles/learn/index.module.css";

import cloud from "../../images/shared/cloud.svg";

function Index(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <section className={styles["learn-section"]}>
      <div className={styles["content"]}>
        <h1>Learn About Climate Change!</h1>
        <h2>Click On One Of the Clouds</h2>
        <div className={styles["container"]}>
          <Link href="/learn/the-problem" passHref>
            <Cloud height={400} width={400} cursor={"pointer"}>
              <h3 style={{ textDecoration: "underline", color: "black" }}>
                The Problem
              </h3>
            </Cloud>
          </Link>
          <Link href="/learn/the-science" passHref>
            <Cloud height={400} width={400} cursor={"pointer"}>
              <h3 style={{ textDecoration: "underline", color: "black" }}>
                The Science
              </h3>
            </Cloud>
          </Link>
          <Link href="/learn/the-solution" passHref>
            <Cloud height={400} width={400} cursor={"pointer"}>
              <h3 style={{ textDecoration: "underline", color: "black" }}>
                The Solution
              </h3>
            </Cloud>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Index;
