// `pages/_app.js`
import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    setScreenSize();
  });

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

function setScreenSize() {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
