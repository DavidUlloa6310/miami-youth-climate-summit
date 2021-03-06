import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import ImageSlider from "../shared/ImageSlider";
import SocialMedia from "../shared/SocialMedia";

import Button from "../shared/Button";

import styles from "../../styles/index/GrassSection.module.css";

import imageOne from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 1.jpg";
import imageTwo from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 108.jpg";
import imageThree from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 114.jpg";
import imageFour from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 117.jpg";
import imageFive from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 159.jpg";
import imageSix from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 66.jpg";
import imageSeven from "../../images/index/carousel/2021.03.06_Miami Youth Climate Summit - 74.jpg";
import imageEight from "../../images/index/carousel/Copy of File_004.jpeg";
import imageNine from "../../images/index/carousel/File_000.jpeg";

function GrassSection(props) {
  return (
    <section className={styles["grass-section"]}>
      <div className={styles["text"]}>
        <h2>{"We're Here to Fight Climate Change"}</h2>
        <p>
          We aim to elevate the discussion on climate change from “What is it?”
          to “What can we do to stop it?” with engaging speakers and workshops.
          <br />
          Join us to learn about climate change from a global perspective.
        </p>
        <div className={styles["buttons"]}>
          <Link href="https://whova.com/portal/registration/mycs_202203/">
            <Button style={{ width: "200px", fontSize: "1.5em" }}>
              Register
            </Button>
          </Link>

          {/* <Button
            style={{ width: "200px", fontSize: "1.5em" }}
            onClick={() => {
              alert("Whova Register will be up soon!");
            }}
          >
            Register
          </Button> */}
        </div>
        <p className={styles["email"]}>miami.ycs@gmail.com</p>
      </div>
      <ImageSlider
        slides={[
          <Image
            height={625}
            width={600}
            src={imageOne}
            alt="Image One"
            key={1}
            priority
          ></Image>,
          <Image
            src={imageTwo}
            height={400}
            width={600}
            alt="Image Two"
            key={2}
            priority
          ></Image>,
          <Image
            src={imageThree}
            height={400}
            width={600}
            alt="Image Three"
            key={3}
            priority
          ></Image>,
          <Image
            src={imageFour}
            height={400}
            width={600}
            alt="Image Four"
            key={4}
            priority
          ></Image>,
          <Image
            src={imageFive}
            height={400}
            width={600}
            alt="Image Five"
            key={5}
            priority
          ></Image>,
          <Image
            src={imageSix}
            height={600}
            width={400}
            alt="Image Six"
            key={6}
            priority
          ></Image>,
          <Image
            src={imageSeven}
            height={400}
            width={600}
            alt="Image Seven"
            key={7}
            priority
          ></Image>,
          <Image
            src={imageEight}
            height={400}
            width={600}
            alt="Image Eight"
            key={8}
            priority
          ></Image>,
          <Image
            src={imageNine}
            height={400}
            width={600}
            alt="Image Nine"
            key={9}
            priority
          ></Image>,
        ]}
      ></ImageSlider>
      <SocialMedia size={25} color="white"></SocialMedia>
    </section>
  );
}

export default GrassSection;
