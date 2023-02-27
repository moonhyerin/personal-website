import { useRef } from "react";
import Header from "../components/header";
import styles from "../styles/utils.module.css";

const sectionStyle = {
  height: "100vh",
  width: "100%",
  fontSize: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Home() {
  const homeRef = useRef();
  const aboutMeRef = useRef();
  const workingRef = useRef();
  const contactRef = useRef();

  return (
    <div className={styles.container}>
      <Header style={styles.header} />
      <section ref={homeRef} style={sectionStyle} id="home">
        home
      </section>
      <section ref={aboutMeRef} style={sectionStyle} id="aboutme">
        about me
      </section>
      <section ref={workingRef} style={sectionStyle} id="working">
        working
      </section>
      <section ref={contactRef} style={sectionStyle} id="contact">
        contact
      </section>
    </div>
  );
}
