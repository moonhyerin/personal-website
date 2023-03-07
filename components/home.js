import { useRef } from 'react';
import TypeIt from 'typeit-react';

import homeStyles from './home.module.css';

export default function Home() {
  const homeRef = useRef();

  return (
    <>
      <div className={homeStyles.title}>
        <p>Hi, I'm Hyerin 👩🏼‍💻</p>
        <p>
          a{' '}
          <TypeIt
            options={{
              strings: ['software developer'],
              speed: 150,
              startDelay: 900,
              loop: true,
              loopDelay: 5000,
              lifeLike: true,
              waitUntilVisible: true,
            }}
            className={homeStyles.highlight}
          />{' '}
          who is
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
