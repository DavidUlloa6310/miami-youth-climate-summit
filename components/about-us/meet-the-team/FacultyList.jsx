import React from "react";
import Image from "next/image";
import MemberCard from "./MemberCard";

import styles from "../../../styles/about-us/faculty-list.module.css";

function FacultyList(props) {
  return (
    <section className={styles["faculty-list"]}>
      <MemberCard
        image={
          <Image
            height={300}
            width={300}
            layout="fixed"
            src={require("../../../images/about-us/team/Kelly Jackson.jpg")}
            alt="Dr. Kelly Jackson"
          ></Image>
        }
        name="Dr. Kelly Jackson"
        school="Ransom Everglades School"
      >
        <p>National Geographic Certified Educator</p>
      </MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            src={require("../../../images/about-us/team/Lyanne Abreu.jpg")}
            alt="Ms. Layanne Abreu"
          ></Image>
        }
        name="Ms. Lyanne Abreu"
        school="TERRA Environmental Research Institute"
      >
        <p>2019 National Geographic Grosvenor Teacher Fellow</p>
      </MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            src={require("../../../images/about-us/team/Leopoldo Llinas.jpeg")}
            alt="Dr.Leopoldo Llinas"
          ></Image>
        }
        name="Dr. Leopoldo Llinas"
        school="Palmer Trinity School"
      >
        <p>National Geographic Certified Educator</p>
      </MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            src={require("../../../images/about-us/team/Dr. Katie Shulzitski.jpg")}
            alt="Dr. Katie Shulzitski"
          ></Image>
        }
        name="Dr. Katie Shulzitski"
        school="Carrollton School of the Sacred Heart"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            src={require("../../../images/about-us/team/Emilia Isabel Odife.png")}
            alt="Ms. Emilia Isabel Odife"
          ></Image>
        }
        name="Ms. Emilia Isabel Odife"
        school="Lake Mary Preparatory School"
      >
        <p>2017 National Geographic Grosvenor Teacher Fellow</p>
        <p>National Geographic Teacher Advisory Council</p>
        <p>Founder, Miami Youth Climate Summit</p>
      </MemberCard>

      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            objectPosition="top center"
            src={require("../../../images/about-us/team/Kirk Nieveen.jpg")}
            alt="Mr. Kirk Nieveen"
          ></Image>
        }
        name="Mr. Kirk Nieveen"
        school="Gulliver Prep"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            src={require("../../../images/about-us/team/Mark Tohulka.jpg")}
            alt="Mr. Mark Tohulka"
          ></Image>
        }
        name="Mr. Mark Tohulka"
        school="Gulliver Prep"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            objectFit="cover"
            src={require("../../../images/about-us/team/Mark Godinez.jpg")}
            alt="Mr. Mark Godinez"
          ></Image>
        }
        name="Mr. Mark Godinez"
        school="South Dade Senior High"
      ></MemberCard>
    </section>
  );
}

export default FacultyList;
