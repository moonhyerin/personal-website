import React from 'react';
import TypeIt from 'typeit-react';

import homeStyles from './HomePage.module.css';

export default function Home({ isMobile }) {
  return (
    <>
      <div className={isMobile ? homeStyles.mobileTitle : homeStyles.title}>
        <p>Hi, I'm Hyerin</p>
        <p>
          a{' '}
          <TypeIt
            options={{
              strings: ['software developer'],
              speed: 150,
              startDelay: 900,
              lifeLike: true,
              waitUntilVisible: true,
            }}
            className={homeStyles.highlight}
          />{' '}
          {isMobile ? <p>who is</p> : 'who is'}
        </p>
        <p className={homeStyles.description}>
          {isMobile
            ? `understand the importance of staying up to date with the latest
            technologies and trends in order to create the best possible
            products for users. Through continuous learning and hands-on
            experience, I strive to refine my skills and stay at the forefront
            of the ever-changing landscape of technology.`
            : `understand the importance of staying up to date with the latest
            technologies and trends in order to create the best possible
            products for users. Through continuous learning and hands-on
            experience, I strive to refine my skills and stay at the forefront
            of the ever-changing landscape of technology.
            As I experiment with new tools and techniques, I am constantly
            inspired by the creative possibilities that emerge, and am always
            eager to share my insights and learn from others in the field.`}
          {/* interested in new technology. I am keen on user experience and design.
          So I feel rewarded to keep learning and creating things with my own
          hands, not staying in the current state. */}
        </p>
      </div>
    </>
  );
}
