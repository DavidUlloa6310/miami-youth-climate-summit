import React, { useEffect } from "react";
import Head from "next/dist/shared/lib/head";

import styles from "../../styles/learn/the-science.module.css";

function TheScience(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#4EC3F7";
  }, []);

  return (
    <main className={styles["main"]}>
      <Head>
        <title>MYCS Website | Learn | The Science </title>
      </Head>
      <h1 className={styles["title"]}>The Science</h1>
      <div className={styles["columns"]}>
        <div className={styles["column"]}>
          <p className={styles["text-title"]}>
            {`Don't Look Back; We're Not Going That Way!`} By Will Charouhis,
            Founder of <span className="underline">Forces of Nature</span>
          </p>
          <br />
          <p>
            {`The last decade was the hottest one documented in human history. Although scientists have long predicted global warming would lead to more frequent and intense extreme weather events, no one listened.`}
          </p>
          <p>
            {`The greatest crisis ever to face humanity, made devastating changes this decade. It will be remembered as the years our planet started to melt. Our glaciers began an inevitable retreat, melting at breakneck speeds so fast they can be caught on camera. Almost every single glacier on Earth is shrinking now.  The melt from Greenland and Antarctica added over 36 millimeters of extra freshwater to the world’s oceans as the decade rolled away from us. These ocean changes slowed down the north to south current that controls the world’s weather, and the world watched as one after the other, deadly weather events unfolded, affecting every continent on earth.`}
          </p>
          <p>
            {`Mother Nature’s reaction to the science experiment we’ve conducted on our planet is just beginning; this story is hurtling us towards an uninhabitable planet. From the extreme floods in Venice to the fires in Australia and the burning of the Amazon, we ended the decade in a way no one could have fathomed. On the cusp of 2020, the state of the planet is dire.  In the last decade, fossil fuel emissions increased by 10%, and are on the rise. The best science available indicates that we have already reached the point of no return—the tipping point beyond which we cannot recover the world as we know it.`}
          </p>
        </div>
        <br />
        <div className={styles["column"]}>
          <p>{`Our inaction this last decade has ceded the eventual fate of coral reefs, the inevitable future migration of millions who live along the coast, and our own Florida Keys. It was a deadly lost decade. But, there’s hope.`}</p>
          <p>{`In the fight against climate change, an army of youth has gotten the world’s attention. A climate activist was Time’s Person of the year! More than 7.6 million people took to the street in protest in 2019, and millions more protested virtually in 2020. True, the climate is not on the front pages, where it needs to be, but more and more people are acknowledging this threat.`}</p>
          <br />
          <p>
            It’s 2021. The decade ended without enough action to save our
            planet.
          </p>
          <br />
          <p>
            But the message of hope is this: While it is too late to stop
            climate change, it is not too late to slow it. Every action we take
            will slow the effects of global warming incrementally, giving us
            time to adapt to the changes, and therefore give us a better chance
            for survival. The question is do we have what it takes? The
            solutions are here, and the solutions will make our lives better.
            Unite behind the science and join the youth who remain steadfast in
            their call to action.
          </p>
        </div>
      </div>
    </main>
  );
}

export default TheScience;
