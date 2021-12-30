import React, { useState } from "react";
import Image from "next/image";

import Drawer from "./Drawer";
import ScreenBackground from "../shared/ScreenBackground";
import NavLinks from "./NavLinks";

import climateSummitLogo from "../../images/index/youth-climate-summit.png";

import styles from "../../styles/navigation/NavBar.module.css";

function NavBar(props) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);

  function closeDrawer() {
    setShowDrawer(false);
    setShowNavBar(true);
  }

  function openDrawer() {
    setShowDrawer(true);
    setShowNavBar(false);
  }

  return (
    <>
      {showNavBar && (
        <nav className={styles["navbar"]}>
          <NavLinks></NavLinks>
          <div className={styles["burger"]} onClick={openDrawer}>
            <div className={styles["burger-line"]}></div>
            <div className={styles["burger-line"]}></div>
            <div className={styles["burger-line"]}></div>
          </div>
        </nav>
      )}
      {showDrawer && (
        <>
          <Drawer show={showDrawer}>
            <div className={styles["img-div"]}>
              <Image
                src={climateSummitLogo}
                alt="Miami Climate Summit"
                layout="responsive"
                priority
              />
            </div>
            <div classNames={styles["links"]}>
              <NavLinks
                style={{ textAlign: "center" }}
                onClick={closeDrawer}
              ></NavLinks>
            </div>
          </Drawer>
          <ScreenBackground onClick={closeDrawer} />
        </>
      )}
    </>
  );
}

export default NavBar;
