import SkySection from "../components/index/SkySection.jsx";
import GrassSection from "../components/index/GrassSection.jsx";
import Modal from "../components/shared/Modal.jsx";
import Link from "next/link";
import Button from "../components/shared/Button.jsx";
import Head from "next/head";

import { useEffect, useState } from "react";

import styles from "../styles/index/AlertModal.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.getElementById("body").style.backgroundColor = "#96DEE1";
  }, []);

  return (
    <main>
      <Head>
        <title>MYCS Website | Index</title>
      </Head>
      <SkySection></SkySection>
      <GrassSection></GrassSection>
    </main>
  );
}
