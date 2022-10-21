import Head from "next/head";
import React from "react";

const Indexpage = () => {
  return (
    <div>
      <Head>
        <title>
          Test
        </title>
        <meta
          name="description"
          content="Das Portal für alle Brickfilmer und Brickfilm-Interessierte! Präsentiere deine Stop Motion Animationen mit Klicksteinen und tausche dich mit der Community aus."
          key="description"
        />
        <meta
          property="og:description"
          content="Das Portal für alle Brickfilmer und Brickfilm-Interessierte! Präsentiere deine Stop Motion Animationen mit Klicksteinen und tausche dich mit der Community aus."
        />
        <meta
          property="og:title"
          content="Das Brickboard 2.0 Startseite"
          key="og_title"
        />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
      </Head>
      <h1>Test</h1>
      <p>gehts da?</p>
    </div>
  );
};

export default Indexpage;