import React, { useEffect } from "react";

import styles from "../styles/schedule/schedule.module.css";

function Schedule(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#f6b255";
  }, []);

  return (
    <section className={styles["schedule-section"]}>
      <p>
        This year we will be hosting a hybrid summit on March 13th, 2022. <br />
        It will be in person at Gulliver Prep Upper School Campus (6575 N Kendall Dr, Pinecrest, FL 33156) <br />
         and available virtually through Whova
        (advanced registration required).
      </p>
    </section>
  );
}

export default Schedule;
