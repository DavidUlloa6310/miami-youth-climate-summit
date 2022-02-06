import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

import styles from "../../styles/shared/SocialMedia.module.css";

function SocialMedia(props) {
  return (
    <div className={styles["horizontal-div"]}>
      <Link href="https://twitter.com/YouthClimateMia" passHref>
        <FaTwitter size={props.size} color={props.color} />
      </Link>
      <Link href="https://www.instagram.com/youthclimate.mia/" passHref>
        <FaInstagram size={props.size} color={props.color} />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UC3EmXbTiv81J6MJCnLqkcYw"
        passHref
      >
        <FaYoutube size={props.size} color={props.color} />
      </Link>
      <Link href="https://www.tiktok.com/@youthclimate.mia?lang=en" passHref>
        <FaTiktok size={props.size} color={props.color} />
      </Link>
      <Link href="https://www.facebook.com/youthclimate.mia/" passHref>
        <FaFacebook size={props.size} color={props.color} />
      </Link>
    </div>
  );
}

export default SocialMedia;
