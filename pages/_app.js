import React from "react";
import { StoreProvider } from "../context/custom_store";
import GlobalStyles from "../styles/global.styles";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
