import React, { useEffect } from "react";

import PhotoGallery from "../components/art-contest/PhotoGallery";

import styles from "../styles/art-contest/art-contest.module.css";

function ArtContest(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <main>
      <h1 className={styles["title"]}>
        Take A Look At These Amazing Submissions from the 2021 Competition!
      </h1>
      <h2 style={{ textAlign: "center" }}>Click for full image</h2>
      <h2 style={{ textAlign: "center" }}>
        2022 Art Contest Up Now! <br />
        <a
          style={{ color: "#96dee1", textDecoration: "underline" }}
          href="https://www.google.com"
        >
          Click Here To Submit Your Art
        </a>
      </h2>
      <PhotoGallery></PhotoGallery>
    </main>
  );
}

export default ArtContest;
