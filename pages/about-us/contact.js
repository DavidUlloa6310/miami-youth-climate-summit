import React, { useEffect, useReducer } from "react";
import Button from "../../components/shared/Button";

import styles from "../../styles/about-us/contact.module.css";

function isValid(name, email, subject, message) {
  return name !== "" && email.includes("@") && subject !== "" && message !== "";
}

function formReducer(state, action) {
  let payload = { ...state };

  if (action.type === "UPDATE_NAME") {
    payload.name = action.value;
  } else if (action.type === "UPDATE_EMAIL") {
    payload.email = action.value;
  } else if (action.type === "UPDATE_SUBJECT") {
    payload.subject = action.value;
  } else if (action.type === "UPDATE_MESSAGE") {
    payload.message = action.value;
  } else if (action.type === "RESET") {
    payload = { name: "", email: "", subject: "", message: "", isValid: false };
  }

  payload.isValid = isValid(
    payload.name,
    payload.email,
    payload.subject,
    payload.message
  );

  return payload;
}

function Contact(props) {
  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "white";
  }, []);

  const [formState, formDispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    subject: "",
    message: "",
    isValid: false,
  });

  function nameHandler(event) {
    formDispatch({ type: "UPDATE_NAME", value: event.target.value });
  }

  function emailHandler(event) {
    formDispatch({ type: "UPDATE_EMAIL", value: event.target.value });
  }

  function subjectHandler(event) {
    formDispatch({ type: "UPDATE_SUBJECT", value: event.target.value });
  }

  function messageHandler(event) {
    formDispatch({ type: "UPDATE_MESSAGE", value: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("TEST");
    if (formState.isValid) {
      fetch("../api/mail", {
        method: "post",
        body: JSON.stringify(formState),
      });
    }

    formDispatch({ type: "RESET" });
    alert("Your email has been sent.");
  }

  return (
    <section className={styles["contact-section"]}>
      <div className={styles["text"]}>
        <h1>Contact Us</h1>
        <h2>email: miami.ycs@gmail.com</h2>
      </div>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div className={styles["input-div"]}>
          <label>Name</label>
          <input type="text" onChange={nameHandler} value={formState.name} />
        </div>
        <div className={styles["input-div"]}>
          <label>Email</label>
          <input type="email" onChange={emailHandler} value={formState.email} />
        </div>
        <div className={styles["input-div"]}>
          <label>Subject</label>
          <input
            type="text"
            onChange={subjectHandler}
            value={formState.subject}
          />
        </div>
        <div className={styles["input-div"]}>
          <label>Message</label>
          <textarea onChange={messageHandler} value={formState.message} />
        </div>
        <Button dark style={{ width: "200px" }}>
          Submit
        </Button>
        {formState.isValid ? null : (
          <h2 style={{ color: "red" }}>
            Please fill out all parts of the form and make sure your email has
            an
            {" @"} sign.
          </h2>
        )}
      </form>
    </section>
  );
}

export default Contact;
