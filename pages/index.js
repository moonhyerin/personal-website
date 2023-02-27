import { useRef } from "react";
import Header from "../components/header";
import Home from "../components/home";
import AboutMe from "../components/aboutMe";
import styles from "../styles/utils.module.css";

export default function Landing() {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const workingRef = useRef();
  const contactRef = useRef();

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <section ref={homeRef} id="home">
        <Home />
      </section>
      <section ref={aboutMeRef} id="aboutme">
        <AboutMe />
      </section>
      <section ref={workingRef} id="working">
        working
      </section>
      <section ref={contactRef} id="contact">
        contact
      </section>
    </div>
  );
}
