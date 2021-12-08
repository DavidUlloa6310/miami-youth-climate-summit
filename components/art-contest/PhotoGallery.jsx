import React from "react";
import Image from "next/image";

import GalleryItem from "./GalleryItem";

import coexist from "../../images/gallery/coexist.jpeg";
import acidicOCean from "../../images/gallery/acidic ocean.jpg";
import blueMoon from "../../images/gallery/blue moon.jpg";
import cowFarts from "../../images/gallery/cow farts.png";
import featheredFriend from "../../images/gallery/feathered friend.jpg";
import fireAndWater from "../../images/gallery/fire and water.jpeg";
import floridaBeach from "../../images/gallery/florida beach.jpg";
import spottedGiants from "../../images/gallery/gentle spotted giants.jpeg";
import greyCity from "../../images/gallery/grey city.jpg";
import hangingOn from "../../images/gallery/hanging on.jpeg";
import leadKids from "../../images/gallery/lead kids.jpeg";
import lostCity from "../../images/gallery/lost city.png";
import madeInGaia from "../../images/gallery/made in gaia.jpeg";
import melting from "../../images/gallery/melting.jpg";
import natureWillPrevail from "../../images/gallery/nature will always prevail.jpeg";
import oilInArtic from "../../images/gallery/oil in the artic.png";
import personalStrength from "../../images/gallery/personal strength.jpeg";
import pipingPlover from "../../images/gallery/piping plover.jpg";
import rainCheck from "../../images/gallery/rain check.jpg";
import rebirth from "../../images/gallery/rebirth.jpeg";
import seaLevelRise from "../../images/gallery/sea level rise.jpeg";
import stripedGiants from "../../images/gallery/striped giants.jpeg";
import summerTime from "../../images/gallery/summer time.jpg";
import sunAndFun from "../../images/gallery/sun and fun.jpg";
import sunTime from "../../images/gallery/sun time.jpeg";
import whenRoachesReign from "../../images/gallery/when roaches reign.png";

import styles from "../../styles/art-contest/PhotoGallery.module.css";

function PhotoGallery(props) {
  return (
    <section className={styles["section"]}>
      <div className={styles["container"]}>
        <GalleryItem
          gridHeight={styles["w-2"]}
          gridWidth={styles["h-2"]}
          pieceName="COEXIST"
          artist="Lauren Bartel (Winner)"
          image={
            <Image
              src={coexist}
              alt="Coexist"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="The Unpredictability of an Acidic Ocean"
          artist="Julia Mackin-McLaughlin"
          gridWidth={styles["w-2"]}
          image={
            <Image
              src={acidicOCean}
              alt="Acidic Ocean"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          gridHeight={styles["h-3"]}
          pieceName="Blue Moon"
          artist="Moses Ojo"
          image={
            <Image
              src={blueMoon}
              alt="Blue Moon"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Cow Farts"
          artist="Aaliyah Asghar"
          gridWidth={styles["w-2"]}
          image={
            <Image
              src={cowFarts}
              alt="Cow Farts"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Lonesome Feathered Freidn"
          artist="Luca Castillo"
          gridHeight={styles["h-2"]}
          image={
            <Image
              src={featheredFriend}
              alt="Feathered Friend"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Fire & Water"
          artist="Milla Siahpoosh"
          image={
            <Image
              src={fireAndWater}
              alt="Fire and Water"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Native Florida Beach"
          artist="Taylor Rothrock"
          image={
            <Image
              src={floridaBeach}
              alt="Florida Beach"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          gridHeight={styles["h-2"]}
          pieceName="Gentle Spotted Giants"
          artist="Lucca Castillo"
          image={
            <Image
              src={spottedGiants}
              alt="Spotted Giants"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="The Grey City"
          artist="Charlotte Mark"
          image={
            <Image
              src={greyCity}
              alt="Grey City"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Hanging On"
          artist="Grayce Cheng"
          image={
            <Image
              src={hangingOn}
              alt="Hanging On"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          gridHeight={styles["h-2"]}
          gridWidth={styles["w-2"]}
          artist="Alejandra Leon"
          pieceName="Niños de Plomo / Lead Kids"
          image={
            <Image
              src={leadKids}
              alt="Lead Kids"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="the Lost City of Miami"
          artist="Aiden Levy"
          image={
            <Image
              src={lostCity}
              alt="Lost City"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="MADE IN GAIA"
          artist="Karela Lucia Palazio"
          image={
            <Image
              src={madeInGaia}
              alt="Made In Gaia"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Melting"
          artist="Lily Poses"
          image={
            <Image
              src={melting}
              alt="Melting"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          gridWidth={styles["w-2"]}
          pieceName="Nature Will Always Prevail"
          artist="Karela Lucia Palazio"
          image={
            <Image
              src={natureWillPrevail}
              alt="Nature Will Prevail"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Oil in the Artic"
          artist="Aiden Levy"
          image={
            <Image
              src={oilInArtic}
              alt="Oil In The Artic"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Personal Strength"
          artist="Lucca Castillo"
          gridHeight={styles["h-2"]}
          gridWidth={styles["w-2"]}
          image={
            <Image
              src={personalStrength}
              alt="Personal Strength"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          gridWidth={styles["w-2"]}
          pieceName="Piping Plover Habitat Destruction"
          artist="Gabriela Bribiesca"
          image={
            <Image
              src={pipingPlover}
              alt="Pipin Plover"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Rain Check"
          artist="Moses Ojo"
          image={
            <Image
              src={rainCheck}
              alt="Rain Check"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Decomposition is Rebirth"
          artist="Karela Lucia Palazio"
          image={
            <Image
              src={rebirth}
              alt="Rebirth"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Sea Level Rise"
          artist="Alexa Duenas"
          image={
            <Image
              src={seaLevelRise}
              alt="Sea Level Rise"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Striped Giants"
          artist="Grayce Cheng"
          image={
            <Image
              src={stripedGiants}
              alt="Striped Giants"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          artist="Moses Ojo"
          pieceName="Summer Time"
          image={
            <Image
              src={summerTime}
              alt="Summer Time"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          image={
            <Image
              src={sunAndFun}
              alt="Sun and Fun"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="Sun-time"
          artist="Grayce Cheng"
          image={
            <Image
              src={sunTime}
              alt="Sun Time"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>

        <GalleryItem
          pieceName="When Roaches Reign"
          artist="Aidan levy"
          gridHeight={styles["h-2"]}
          gridWidth={styles["w-2"]}
          image={
            <Image
              src={whenRoachesReign}
              alt="When Roaches Reign"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 50%"
            ></Image>
          }
        ></GalleryItem>
      </div>
    </section>
  );
}

export default PhotoGallery;
