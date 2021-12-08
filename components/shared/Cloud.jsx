import React from "react";

import PropTypes from "prop-types";

import styles from "../../styles/shared/Cloud.module.css";

import Image from "next/image";
import cloud from "../../images/shared/cloud.svg";

function Cloud(props) {
  return (
    <div
      onClick={props.onClick}
      className={styles["image-div"]}
      style={{ width: props.width, height: props.height, cursor: props.cursor }}
    >
      <h2 className={styles["image-text"]} style={{ color: "black" }}>
        {props.children}
      </h2>
      <Image src={cloud} alt="Cloud" layout="responsive"></Image>
    </div>
  );
}

Cloud.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Cloud;
