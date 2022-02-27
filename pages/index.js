import SkySection from "../components/index/SkySection.jsx";
import GrassSection from "../components/index/GrassSection.jsx";
import Modal from "../components/shared/Modal.jsx";
import Link from "next/link";
import Button from "../components/shared/Button.jsx";

import { useEffect, useState } from "react";

import styles from "../styles/index/AlertModal.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <main>
      {showModal && (
        <Modal onClick={toggleModal}>
          <div className={styles["alert-modal"]}>
            <h1 className={styles["close-modal"]}>X</h1>
            <h1>Registration is now up!</h1>
            <p>
              To register, click the button below or go to this link:{" "}
              <a href="https://whova.com/portal/registration/mycs_202203/">
                https://whova.com/portal/registration/mycs_202203/
              </a>
            </p>
            <Link href="https://whova.com/portal/registration/mycs_202203/">
              <Button style={{ width: "200px", fontSize: "1.5em" }}>
                Register
              </Button>
            </Link>
          </div>
        </Modal>
      )}
      <SkySection></SkySection>
      <GrassSection></GrassSection>
    </main>
  );
}
