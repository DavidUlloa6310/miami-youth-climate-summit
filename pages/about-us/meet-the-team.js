import React, { useEffect } from "react";
import Head from "next/dist/shared/lib/head";

import StudentList from "../../components/about-us/meet-the-team/StudentList";
import FacultyList from "../../components/about-us/meet-the-team/FacultyList";

import styles from "../../styles/about-us/meet-the-team.module.css";

function MeetTheTeam(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <section className={styles["team-section"]}>
      <Head>
        <title>MYCS Website | Meet The Team</title>
      </Head>
      <h1>2022 Student Leadership Board</h1>
      <StudentList></StudentList>
      <h1>Faculty Advisors</h1>
      <FacultyList></FacultyList>
    </section>
  );
}

export default MeetTheTeam;
