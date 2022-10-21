import Head from "next/head";
import React from "react";
import { Styledheader } from "../components/header.styles";
import { useStoreState } from "../context/custom_store";

const Indexpage = () => {
  const {isAuthenticated} = useStoreState();
  console.log("Auth?");
  console.log(isAuthenticated);
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
      <Styledheader>Test {isAuthenticated ? 'ANDREAS' : ""}</Styledheader>
      <p>gehts da?</p>
    </div>
  );
};

export default Indexpage;