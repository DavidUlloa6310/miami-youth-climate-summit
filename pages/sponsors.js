import React, { useEffect } from "react";
import Image from "next/dist/client/image";

import styles from "../styles/sponsors/sponsors.module.css";

import beesWrap from "../images/sponsors/bees wrap.png";
import blue from "../images/sponsors/blue.png";
import caplow from "../images/sponsors/Caplow+Manzano+Logo.png";
import cleo from "../images/sponsors/cleo.png";
import dream from "../images/sponsors/dream.png";
import FIU from "../images/sponsors/FIU.png";
import natGeo from "../images/sponsors/geographic.png";
import gulliver from "../images/sponsors/gulliver.png";
import harvest from "../images/sponsors/harvest.png";
import nature from "../images/sponsors/nature.png";
import ransom from "../images/sponsors/ransom.png";
import UM from "../images/sponsors/UM.png";
import waterlust from "../images/sponsors/waterlust.png";
import cummins from "../images/sponsors/cummins.jpg";
import vitaBug from "../images/sponsors/vitabug.png";
import ecoBags from "../images/sponsors/ecobags.png";

function Sponsors(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <section className={styles["sponsors-section"]}>
      <h1>Thank you so much to our sponsors!</h1>
      <p>
        Please contact us if you are interested in becoming a sponsor, or to
        make a donation. <br /> miami.ycs@gmail.com
      </p>
      <h2>Special Thanks for the Educational Grants</h2>
      <div className={styles["sponsors-div"]}>
        <div className={styles["image-div"]}>
          <Image src={natGeo} alt="National Geographic"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={dream} alt="Dream in Green"></Image>
        </div>
      </div>
      <h2>Stand for the Planet Gold Sponsors</h2>
      <div className={styles["sponsors-div"]}>
        <div className={styles["image-div"]}>
          <Image src={nature} alt="Forces of Nauture"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={gulliver} alt="GulliverPrep"></Image>
        </div>
      </div>
      <h2>Stand for The Oceans Silver Sponsors</h2>
      <div className={styles["sponsors-div"]}>
        <div className={styles["image-div"]}>
          <Image src={cleo} alt="The Cleo Institute"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={caplow} alt="Caplow Mazano"></Image>
        </div>
      </div>
      <h2>Stand for the Forests Bronze Sponsors</h2>
      <div className={styles["sponsors-div"]}>
        <div className={styles["image-div"]}>
          <Image src={beesWrap} alt="Bee's Wrap"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={harvest} alt="Hungry Harvest"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={waterlust} alt="Waterlust"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={vitaBug} alt="VitaBug"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={ecoBags} alt="Eco Bags"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={blue} alt="Blue Mission Group"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={cummins} alt="Cummins Cederberg"></Image>
        </div>
      </div>
      <h2>University Sponsors</h2>
      <div className={styles["sponsors-div"]}>
        <div className={styles["image-div"]}>
          <Image src={UM} alt="University of Miami"></Image>
        </div>
        <div className={styles["image-div"]}>
          <Image src={FIU} alt="Florida International University"></Image>
        </div>
      </div>
      <h2>Special Acknowledgements</h2>
      <p>
        Thank you to Ransom Everglades School for hosting and broadcasting the
        virtual Miami Youth Climate Summit.
      </p>
      <div className={styles["image-div"]}>
        <Image src={ransom} alt="Ransome Everglades"></Image>
      </div>
    </section>
  );
}

export default Sponsors;
