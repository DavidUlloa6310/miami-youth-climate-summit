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
        Take A Look At These Amazing Submissions!
      </h1>
      <h2 style={{ textAlign: "center" }}>Click for full image</h2>
      <PhotoGallery></PhotoGallery>
    </main>
  );
}

export default ArtContest;
