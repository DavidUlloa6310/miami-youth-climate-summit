import React, { useEffect } from "react";

import styles from "../styles/schedule/schedule.module.css";

function Schedule(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <section className={styles["schedule-section"]}>
      <p>
        This year we will be hosting a hybrid summit. It will take place on
        March 5th, 2022. <br />
        It will be in person at UM RSMAS and available virtually through Whoova
        (advanced registration will be required).
      </p>
    </section>
  );
}

export default Schedule;
