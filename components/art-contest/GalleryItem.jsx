import React, { useState } from "react";

import Image from "next/image";

import styles from "../../styles/art-contest/GalleryItem.module.css";
import Modal from "../shared/Modal";

function GalleryItem(props) {
  const [showContext, setShowContext] = useState(false);

  function toggleShowContext() {
    setShowContext((prevState) => !prevState);
  }

  const modal = (
    <Modal onClick={toggleShowContext}>
      <div className={styles["image-preview"]}>{props.image}</div>
      <h1 className={styles["piece-name"]}>{props.pieceName}</h1>
      <h2 className={styles["artist"]}>{props.artist}</h2>
    </Modal>
  );

  return (
    <>
      {showContext && modal}
      <div
        className={`${styles["gallery-container"]} ${props.gridWidth || ""} ${
          props.gridHeight || ""
        }`}
        onClick={toggleShowContext}
      >
        <div className={styles["gallery-item"]}>
          <div className={styles["image"]}>{props.image}</div>
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
