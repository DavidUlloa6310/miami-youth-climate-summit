import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "../components/shared/Button.jsx";

import styles from "../styles/support/support.module.css";

import shirt from "../images/support/shirt.jpg";
import mask from "../images/support/mask.jpg";
import bag from "../images/support/bag.jpg";

function Support(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <section className={styles["support-section"]}>
      <h1 className={styles["title"]}>MYCS Merch</h1>
      <p>
        Consider buying our official merchandise to mark your attendance at this
        year’s historic virtual summit! <br />
        Your purchase will help fund the operational costs of next year’s
        summit. <br />
        We thank you for the support!
      </p>

      <Link
        passHref
        href="https://www.bonfire.com/store/miami-youth-climate-summit/"
      >
        <Button dark>Shop Now</Button>
      </Link>
      <div className={styles["images"]}>
        <Image src={shirt} alt="Shirt"></Image>
        <Image src={mask} alt="Mask"></Image>
        <Image src={bag} alt="Bag"></Image>
      </div>
    </section>
  );
}

export default Support;
