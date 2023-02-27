import { useRef } from "react";
import Header from "./header";
import homeStyles from "./home.module.css";

export default function Home() {
  const homeRef = useRef();

  return (
    <>
      <div className={homeStyles.title}>
        <p>Hi, I'm Hyerin</p>
        <p>
          a <span className={homeStyles.highlight}>software developer</span> who
          is
        </p>
        <p className={homeStyles.description}>
          interested in new technology. I am keen on user experience and design.
          So I feel rewarded to keep learning and creating things with my own
          hands, not staying in the current state.
        </p>
      </div>
    </>
  );
}
