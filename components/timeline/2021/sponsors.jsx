import React from "react";
import Image from "next/image";

import styles from "../../../styles/timeline/sponsors.module.css";

function sponsors(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const sponsors = importAll(
    require.context("../../../images/sponsors", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <section className={styles["sponsors-section"]}>
      <h1>Thank you so much to our 2021 sponsors!</h1>
      <div className={styles["grid"]}>
        {Object.keys(sponsors).map((key, index) => {
          return (
            <Image
              key={key}
              alt={key}
              src={require(`../../../images/sponsors/${key}`)}
            ></Image>
          );
        })}
      </div>
      <p>
        Please contact us if you are interested in becoming a sponsor, or to
        make a donation. <br /> miami.ycs@gmail.com
      </p>
    </section>
  );
}

export default sponsors;
