import React, { useEffect } from "react";
import Image from "next/image";

import ScheduleItem from "../components/shared/ScheduleItem";

import MYCSLogo from "../images/index/youth-climate-summit.png";
import alexandraEnder from "../images/schedule/speakers/alexandra ender.jpg";
import amyClement from "../images/schedule/speakers/amy clement.png";
import barbraMartinezGuerrero from "../images/schedule/speakers/barbra martinez guerrero.jpeg";
import carolineChomanics from "../images/schedule/speakers/caroline chomanics.jpeg";
import christyFolk from "../images/schedule/speakers/christy folk.png";
import dwightBullard from "../images/schedule/speakers/dwight bullard.png";
import janeGilbert from "../images/schedule/speakers/jane gilbert.png";
import kateStein from "../images/schedule/speakers/kate stein.jpeg";
import lisaMerkle from "../images/schedule/speakers/lisa merkle.png";
import nataliaBrown from "../images/schedule/speakers/natalia brown.png";
import nicoleGazo from "../images/schedule/speakers/nicole gazo.png";

import styles from "../styles/schedule/schedule.module.css";

function Schedule(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#8c2d27";
  }, []);

  return (
    <section className={styles["schedule-section"]}>
      <h1>Schedule</h1>
      <h3 className={styles["description"]}>
        This year we will be hosting a hybrid summit on Sunday, March 13th,
        2022. <br />
        It will be in person at Gulliver Prep Upper School Campus (6575 N
        Kendall Dr, Pinecrest, FL 33156) <br />
        and available virtually through Whova (advanced registration required).{" "}
      </h3>
      <div className={styles["division"]}></div>
      <ScheduleItem announcement="Welcome: 9:00 AM - 9:20 AM"></ScheduleItem>
      <ScheduleItem announcement="Keynote Address: 9:20 AM - 9:50 AM"></ScheduleItem>
      <ScheduleItem
        name="Nicole Gazo"
        description="GenCLEO Strategist"
        title="Keynote Address"
        titleStyles={{ fontWeight: "600", textDecoration: "underline" }}
        image={
          <Image alt="Nicole Gazo" src={nicoleGazo} height={150} width={150} />
        }
      ></ScheduleItem>
      <ScheduleItem announcement="Breakout Session #1: 10:00 AM - 10:45 AM">
        Breakout Session #1, 10:00 AM - 10:45 AM
      </ScheduleItem>
      <ScheduleItem
        name="Lisa Merkle"
        description="Co-Founder, Imagine Farms"
        image={
          <Image alt="Lisa Merkle" src={lisaMerkle} height={150} width={150} />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Caroline Chomanics"
        title="Eco-Action Organizing In Florida by Caroline Comanics"
        image={
          <Image
            alt="Caroline Chomanics"
            src={carolineChomanics}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Lauren Bartel"
        description="Gulliver Preparatory School, Million Orchids Project @ Fairchild Tropical Botanic Gardens"
        title="Million Orchids"
        image={
          <Image
            alt="Lauren Bartel"
            src={require("../images/schedule/speakers/Lauren Bartel.jpg")}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Ron Magill"
        description="Goodwill Ambassador and Communications Director, Zoo Miami"
        image={
          <Image
            alt="Ron Magill"
            src={require("../images/schedule/speakers/Ron_Magill.jpg")}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Miguel Endara"
        title="Educated Choices and Climate Activism"
      ></ScheduleItem>
      <ScheduleItem
        name="John Morales"
        description="Chief Meteorologist at WTVJ NBC-6"
        title="What's Ahead: Challenges to Florida in a Warmer World, and a Reason for Optimism"
        image={
          <Image
            alt="John Morales"
            src={require("../images/schedule/speakers/john morales.jpg")}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <div className={styles["division"]}></div>
      <ScheduleItem announcement="Breakout Session #2: 11:00 AM - 11:45 AM"></ScheduleItem>
      <ScheduleItem
        name="Caroline Chromanics"
        title="How Urban Agriculture Can Combat Climate Change"
        image={
          <Image
            alt="Caroline Chromanics"
            src={carolineChomanics}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem name="Raquel Fernandez"></ScheduleItem>
      <ScheduleItem
        name="John Morales"
        description="Chief Meteorologist at WTVJ NBC-6"
        title="What's Ahead: Challenges to Florida in a Warmer World, and a Reason for Optimism"
        image={
          <Image
            alt="John Morales"
            src={require("../images/schedule/speakers/john morales.jpg")}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Amy Clement"
        description="Professor, University of Miami Rosenstiel School of Marine and Atmospheric Science"
        title="Climate Anxiety"
        image={
          <Image alt="Amy Clement" src={amyClement} height={150} width={150} />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Ron Magill"
        description="Goodwill Ambassador and Communications Director, Zoo Miami"
        image={
          <Image
            alt="Ron Magill"
            src={require("../images/schedule/speakers/Ron_Magill.jpg")}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem announcement="Lunch & Boxed Water Video: 11:45 AM - 12:15 PM"></ScheduleItem>
      <div className={styles["division"]}></div>
      <ScheduleItem announcement="Breakout Session #3: 12:25 PM - 1:10 PM"></ScheduleItem>
      <ScheduleItem
        name="Francisco Torres"
        image={
          <Image
            alt="Compost For Life"
            src={require("../images/schedule/speakers/compost for life.png")}
            height={150}
            width={150}
          />
        }
        title="Compost for Life"
      ></ScheduleItem>
      <ScheduleItem
        name="Kate Stein"
        title="Journalism"
        image={
          <Image alt="Kate Stein" src={kateStein} height={150} width={150} />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Junk Kouture"
        title="Youth Fashion Creations Made From Recycled Materials."
        image={
          <Image
            alt="Junk Kouture"
            src={require("../images/schedule/speakers/junk kouture.png")}
            height={150}
            width={150}
          ></Image>
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Christy Folk"
        title="Florida on the Front Lines"
        image={
          <Image
            alt="Christy Folk"
            src={christyFolk}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Tico Aran"
        image={
          <Image
            src={require("../images/schedule/speakers/Tico Aran.jpg")}
            alt="Tico Aran"
            height={150}
            width={150}
          ></Image>
        }
      ></ScheduleItem>
      <ScheduleItem
        name="Alexandra Ether & Barbara Martinez-Guerrero"
        title="Dream in Green Teacher Workshop"
        vertical={true}
        image={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={alexandraEnder}
              alt="Alexandra Ether"
              width={150}
              height={150}
              className={styles["image"]}
            ></Image>
            <Image
              alt="Barbara Martinez-Guerrero"
              src={barbraMartinezGuerrero}
              height={150}
              width={150}
            />
          </div>
        }
      ></ScheduleItem>
      <ScheduleItem announcement="Keynote Address: 1:25 PM - 2:00 PM"></ScheduleItem>
      <ScheduleItem
        name="Jane Gilbert"
        description="Chief Heat Officer, Miami-Dade County"
        title="Keynote Address"
        titleStyles={{ fontWeight: "600", textDecoration: "underline" }}
        image={
          <Image
            alt="Jane Gilbert"
            src={janeGilbert}
            height={150}
            width={150}
          />
        }
      ></ScheduleItem>
      <ScheduleItem announcement="Art Contest Winners: 2:00 PM - 2:05 PM"></ScheduleItem>
      <ScheduleItem announcement="DEI Panel: 2:10 PM - 2:55 PM"></ScheduleItem>
      <ScheduleItem
        name="DEI Panel"
        title="Dwight Bullard, Claudia Navarro, Natalia Brown, Reverend Houston Cypress"
        titleStyles={{ fontWeight: "600", textDecoration: "underline" }}
        vertical={true}
        image={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              alt="Dwight Bullard"
              src={dwightBullard}
              height={150}
              width={150}
            />
            <Image alt="MYCS Logo" src={MYCSLogo} height={150} width={150} />
            <Image
              alt="Natalia Brown"
              src={nataliaBrown}
              height={150}
              width={150}
            />
            <Image
              alt="Houston Cypress"
              src={require("../images/schedule/speakers/houston cypress.jpeg")}
              height={150}
              width={150}
            />
          </div>
        }
      ></ScheduleItem>
      <ScheduleItem announcement="Student Panel: 3:05 PM - 3:50 PM"></ScheduleItem>
      <ScheduleItem announcement="Thank You and Farewell: 3:55 PM - 4:05 PM"></ScheduleItem>
    </section>
  );
}

export default Schedule;
