import React from "react";
import Image from "next/image";

import MemberCard from "./MemberCard";

import styles from "../../../styles/about-us/student-list.module.css";

function StudentList(props) {
  return (
    <div className={styles["student-list"]}>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/Sebastian Fernandez, Co-President, TERRA.JPG")}
            alt="Sebastian Fernandez"
          ></Image>
        }
        name="Sebastian Fernandez, Co President"
        school="TERRA Environmental Research Institute"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/Gianna Hutton - Co-President.jpg")}
            alt="Giannna Hutton"
          ></Image>
        }
        name="Gianna Hutton, Co President"
        school="Miami Palmetto Senior High"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/Analysse Humaran - Vice President .jpg")}
            alt="Giannna Hutton"
          ></Image>
        }
        name="Analysse Humaran, Co Vice President"
        school="Miami Palmetto Senior High School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/Isabella Perez-Compres_ Vice President_ Carrollton.jpg")}
            alt="Isabella Perez"
          ></Image>
        }
        name="Isabella Perez-Compres, Co Vice President"
        school="Carrollton School of the Sacred Heart"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="right top"
            src={require("../../../images/about-us/team/Sofia Arnau, Director of Communications, Miami Palmetto Senior High School, 9th Grade.jpg")}
            alt="Sofia Arnau"
          ></Image>
        }
        name="Sofia Arnau, Co Director of Communications"
        school="Miami Palmetto Senior High School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="right top"
            src={require("../../../images/about-us/team/Mia Bouyoucef_Director of Communications_Ransom Everglades.jpg")}
            alt="Mia Bouyoucef"
          ></Image>
        }
        name="Mia Bouyoucef, Co Director of Communications"
        school="Ransom Everglades School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/Luiz Gandelman DEI Committee- Gulliver Prep.png")}
            alt="Luiz Gandelman"
          ></Image>
        }
        name="Luiz Gandelman, Co Diversity, Equity, & Inclusion Coordinator "
        school="Gulliver Preparatory School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="center right"
            src={require("../../../images/about-us/team/Emrie Pedraza.jpeg")}
            alt="Emrie Pedraza"
          ></Image>
        }
        name="Emrie Pedraza, Co Diversity, Equity, & Inclusion Coordinator"
        school="Doral Academy"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="center bottom"
            src={require("../../../images/about-us/team/Emilia Rubalcaba, Arts and Branding Coordinator.jpg")}
            alt="Emilia Rubalcaba"
          ></Image>
        }
        name="Emilia Rubalcaba, Co Branding/Arts Coordinator"
        school="George Washington Carver Middle School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="center center"
            src={require("../../../images/about-us/team/Tatianna Lowe, Cabinet Member, TERRA.jpg")}
            alt="Tatianna Lowe"
          ></Image>
        }
        name="Tatianna Lowe, Co Branding/Arts Coordinator"
        school="TERRA Environmental Research Institute"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="center center"
            src={require("../../../images/about-us/team/Sabina Khizroev_Social Media Coordinator_Miami Palmetto Senior High.jpg")}
            alt="Sabina Khizroev"
          ></Image>
        }
        name="Sabina Khizroev, Co Social Media Coordinator"
        school="Miami Palmetto Senior High School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="center 80%"
            src={require("../../../images/about-us/team/Anisa Singh, Social Media Co-Coordinator, MAST @ Homestead.jpg")}
            alt="Anisa Singh"
          ></Image>
        }
        name="Anisa Singh, Co Social Media Coordinator"
        school="MAST Academy Homestead"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="right top"
            src={require("../../../images/about-us/team/Camila Gomes, Palmer Trinity School, Speakers and Workshop Coordinator.jpg")}
            alt="Camila Gomes"
          ></Image>
        }
        name="Camila Gomes, Co Speakers & Workshops Coordinator"
        school="Palmer Trinity School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="center 40%"
            src={require("../../../images/about-us/team/Lauren Bartel, Gulliver Preparatory, Speakers and Workshops Coordinator.jpg")}
            alt="Lauren Bartel"
          ></Image>
        }
        name="Lauren Bartel, Co Speakers & Workshops Coordinator"
        school="Gulliver Preparatory School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="right top"
            src={require("../../../images/about-us/team/Evan Pineda Sponsorship Director TERRA.JPG")}
            alt="Evan Pineda"
          ></Image>
        }
        name="Evan Pineda, Co Director of Sponsorship"
        school="TERRA Environmental Research Institute"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            objectPosition="right top"
            src={require("../../../images/about-us/team/William Charouhis Sponsorship Drirector Ransom Everglades.jpg")}
            alt="William Charouhis"
          ></Image>
        }
        name="William Charouhis, Co Director of Sponsorship"
        school="Ransom Everglades"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/Madison Munroe, Ransom Everglades, Website Coordinator.jpg")}
            alt="Madison Munroe"
          ></Image>
        }
        name="Madison Munroe, Co Website Coordinator"
        school="Ransom Everglades School"
      ></MemberCard>
      <MemberCard
        image={
          <Image
            objectFit="cover"
            objectPosition="20% 20%"
            height={300}
            width={400}
            layout="fixed"
            src={require("../../../images/about-us/team/David Ulloa.jpg")}
            alt="David Ulloa"
          ></Image>
        }
        name="David Ulloa, Co Website Coordinator"
        school="TERRA Environmental Research Institute"
      ></MemberCard>
    </div>
  );
}

export default StudentList;
