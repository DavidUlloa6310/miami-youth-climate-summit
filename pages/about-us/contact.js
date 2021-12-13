import React, { useEffect } from "react";
import Button from "../../components/shared/Button";

import styles from "../../styles/about-us/contact.module.css";

function Contact(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  return (
    <section className={styles["contact-section"]}>
      <div className={styles["text"]}>
        <h1>Contact Us</h1>
        <h2>email: miami.ycs@gmail.com</h2>
      </div>
      <form className={styles["form"]}>
        <div className={styles["input-div"]}>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div className={styles["input-div"]}>
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div className={styles["input-div"]}>
          <label>Email</label>
          <input type="email" />
        </div>
        <div className={styles["input-div"]}>
          <label>Message</label>
          <textarea />
        </div>
        <Button dark style={{ width: "200px" }}>
          Submit
        </Button>
      </form>
    </section>
  );
}

export default Contact;
