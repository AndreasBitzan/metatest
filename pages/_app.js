import React from 'react';
import GlobalStyles from '../styles/global.styles';
function  MyApp({
  Component,
  pageProps,
}){
  return(
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
  );
};

export default MyApp;
