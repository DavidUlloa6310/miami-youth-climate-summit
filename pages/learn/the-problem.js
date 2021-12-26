import React, { useEffect } from "react";

import Image from "next/image";

import styles from "../../styles/learn/the-problem.module.css";

import graph from "../../images/learn/graph.png";

function TheProblem(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#3d8894";
  }, []);

  return (
    <section className={styles["problem-section"]}>
      <h1 className={styles["title"]}>The Problem</h1>
      <div className={styles["columns"]}>
        <div className={styles["column"]}>
          <p className={styles["text-title"]}>
            Miami is Ground Zero For Sea-Level Rise By Will Charouhis, Founder
            of <span className="underline">Forces of Nature</span>
          </p>
          <br />
          <p>
            {`In Miami, climate change is not just a future threat; it already
            affects our daily lives. Built on low-lying porous limestone between
            the swamplands of the Florida Everglades and Biscayne Bay,
            sea-levels are rising toward our beautiful city at a faster pace
            than elsewhere in the world. Across Florida, more than 2.4 million
            people live less than 4 feet above the high-tide line, nearly half
            the risk nationwide, with the majority of those residents living in
            Miami.`}
          </p>
          <p>
            {`As one of the 10 most populous cities in the world vulnerable to
            rising seas, Miami has the most to lose, with more than $3.66
            trillion in assets. The latest NOAA Report states South Florida's
            streets will flood every year by 2070, with an expected rise of 3
            feet by the end of the century. The percentage of oceanfront
            properties affected by extreme flooding will rise in Miami-Dade
            County from 5% in 2019 to 98% by 2050. One out of every eight homes
            in Florida will be underwater by 2100, a loss of $413 billion
            dollars.`}
          </p>
          <p>
            {`Even the most conservative estimates show that millions of
            Floridians will soon be forced to move and will become climate
            change refugees. Hurricanes and flooding get media attention in the
            moment, but shortly afterward, it's business as usual. The largest
            obstacle is the one our politicians haven't wanted to face, and our
            scientists have struggled with for decades: creating a sense of
            urgency.`}
          </p>
        </div>
        <br />
        <div className={styles["column"]}>
          <p>{`Though some call Miami-Dade ground Zero for sea-level rise, the problem is universal. Our oceans retain heat. As a result of pollution from human activities, global warming is causing sea-levels to rise across the planet, affecting the homes of more than 300 million people. Our Latin American neighbors in Honduras, Nicaragua, and Guatemala are still reeling from the devastation caused by a duo of hurricanes that ravaged their countries last November, leaving hundreds of thousands of people homeless, due to catastrophic flooding and deadly mudslides.`}</p>
          <p>{`And we’ve all watched the pictures of fires burning across the globe, from California to Australia. Forest loss has broke record numbers for the last five years, with 60% of the Amazon on fire. The number of people suffering across the planet from climate change in the here and now is overwhelming.`}</p>
          <div className={styles["image-div"]}>
            <Image src={graph} alt="Climate Change Graph"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheProblem;
