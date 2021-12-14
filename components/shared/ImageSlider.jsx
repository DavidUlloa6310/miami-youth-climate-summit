import React, { useState } from "react";
import Image from "next/image";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import styles from "../../styles/shared/ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles["slider"]}>
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles["slide"]} ${styles["active"]}`
                : styles["slide"]
            }
            key={index}
          >
            {index === current && slide}
          </div>
        );
      })}
      <div className={styles["arrows"]}>
        <FaArrowAltCircleLeft
          className={styles["left-arrow"]}
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className={styles["right-arrow"]}
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};

export default ImageSlider;
