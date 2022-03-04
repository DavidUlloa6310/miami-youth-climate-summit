import { useState } from "react";
import Head from "next/dist/shared/lib/head";

import "../styles/globals.css";

import NavBar from "../components/navigation/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Miami Youth Climate Summit</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
