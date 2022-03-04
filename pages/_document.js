import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="We aim to elevate the discussion on climate change from “What is it?” to “What can we do to stop it?” with engaging speakers and workshops.
Join us to learn about climate change from a global perspective."
          ></meta>
          <meta
            name="keywords"
            content="MYCS, Miami Youth Climate Summit, Environment, Climate, Earth, 2022"
          ></meta>
          <meta property="title" content="Miami Youth Climate Summit"></meta>
          <meta property="type" content="website" />
        </Head>
        <body id="body">
          <div id="drawer-hook"></div>
          <div id="modal-hook"></div>
          <div id="screen-background-hook"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
