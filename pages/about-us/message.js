import React, { useEffect } from "react";
import Head from "next/dist/shared/lib/head";
import Image from "next/image";

import styles from "../../styles/about-us/message.module.css";

function Message(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context(
      "../../images/about-us/schools",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <main>
      <Head>
        <title>MYCS Website | Message</title>
      </Head>
      <section className={styles["message-section"]}>
        <div className={styles["text"]}>
          <h1>A Message From the Co-Presidents</h1>
          <p>
            Welcome to our 4th Annual Miami Youth Climate Summit! Now, as
            seniors, we’ve virtually spent nearly 4 years with the summit. From
            our initial 200 attendees to the 1000 we hosted last year, this
            event had grown tremendously and its impact on our lives forever
            changed who we are. <br />
            Our team, representing 11 of local public and private schools, is
            composed of some of our closest friends, family, and loving new
            people. And we hope that with this year we can deliver you a summit
            like no other. We aim to unite our frontline community with this
            opportunity to focus our efforts and shift attitudes towards climate
            change to maintain our world for the generations that will come
            after us. With our resources, we hope to educate future student
            coalitions in the fight against climate change, and inspire
            educational institutions to educate their students on this matter.
            <br />
            While the issues that threaten our way of life may seem
            insurmountable, we are sure that together, we can make a difference.
            <br />
            <br />
            Sincerely, Sebastian Fernandez - TERRA Environmental Research
            Insitute, Class of 2022 <br />
            Gianna Hutton - Miami Palmetto Senior High School, Class of 2022
          </p>
        </div>

        <div className={styles["schools"]}>
          {Object.keys(images).map((key, index) => {
            return (
              <div key={key} className={styles["image-div"]}>
                <Image
                  alt={key}
                  src={require(`../../images/about-us/schools/${key}`)}
                  layout="responsive"
                ></Image>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Message;
