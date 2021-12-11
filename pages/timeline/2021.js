import React from "react";
import Image from "next/image";
import MemberCard from "../../components/about-us/meet-the-team/MemberCard";

import styles from "../../styles/timeline/2021.module.css";

function Year2021(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const speakers = importAll(
    require.context(
      "../../images/timeline/2021/speakers",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <section className={styles["section"]}>
      <h1 className={styles["title"]}>2021</h1>
      <div className={styles["speakers"]}>
        <h2>Speakers</h2>
        <div className={styles["grid"]}>
          {Object.keys(speakers).map((key, index) => {
            return (
              <MemberCard
                width="300px"
                height="300px"
                name={key.split(".")[0]}
                key={key}
                image={
                  <Image
                    alt={key}
                    src={require(`../../images/timeline/2021/speakers/${key}`)}
                    layout="fixed"
                    height={300}
                    width={300}
                    objectFit="cover"
                  ></Image>
                }
              ></MemberCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Year2021;
