// `pages/_app.js`
import React, { useEffect } from 'react';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    setScreenSize();
  });
  return <Component {...pageProps} />;
}

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
