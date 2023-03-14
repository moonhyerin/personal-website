import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutMePage from '../components/AboutMePage';
import WorkingPage from '../components/WorkingPage';

import styles from '../styles/utils.module.css';

export default function Landing() {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const workingRef = useRef();
  const contactRef = useRef();

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    const mobile = useMediaQuery({ query: '(max-width: 767px)' });
    useEffect(() => {
      setIsMobile(mobile);
    }, [mobile]);
    return isMobile;
  };

  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <Header className={styles.header} isMobile={isMobile} />
      <section ref={homeRef} id='home'>
        <HomePage isMobile={isMobile} />
      </section>
      <section ref={aboutMeRef} id='aboutme'>
        <AboutMePage />
      </section>
      <section ref={workingRef} id='working'>
        <WorkingPage />
      </section>
      <section ref={contactRef} id='contact'>
        contact
      </section>
    </div>
  );
}
