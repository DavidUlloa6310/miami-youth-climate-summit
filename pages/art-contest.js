import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import PhotoGallery from "../components/art-contest/PhotoGallery";

import styles from "../styles/art-contest/art-contest.module.css";

function ArtContest(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <main>
      <Head>
        <title>MYCS Website | Art Contest</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Congratulations to Nicole Ruiz for winning the MYCS 2022 Art Contest!
        </h1>
        <div style={{ maxWidth: "800px" }}>
          <Image
            alt="Nicole Ruiz Fish"
            src={require("../images/art-contest-winner/nicole_ruiz_fish.PNG")}
          ></Image>
        </div>
      </div>
      <h1 className={styles["title"]}>
        Take A Look At These Amazing Submissions from the 2021 Competition!
      </h1>
      <h2 style={{ textAlign: "center", fontWeight: "400" }}>
        Click for full image
      </h2>
      <h2 style={{ textAlign: "center", fontWeight: "400" }}>
        <a
          style={{ color: "#96dee1", textDecoration: "underline" }}
          href="https://www.youtube.com/watch?v=jddi2ZVNGvo"
        >
          Click Here To See 2022 Submissions
        </a>
      </h2>
      <PhotoGallery></PhotoGallery>
    </main>
  );
}

export default ArtContest;
