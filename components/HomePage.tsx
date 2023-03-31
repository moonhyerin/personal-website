import React from 'react';
import TypeIt from 'typeit-react';

import homeStyles from './HomePage.module.css';

type PropsType = {
  isMobile: boolean;
};

const Home = (props: PropsType) => {
  const { isMobile } = props;

  return (
    <div className='h-screen text-center flex flex-col items-center justify-center'>
      <p className='text-[50px] font-bold'>Hi, I'm Hyerin</p>
      <p className='text-[50px] font-bold'>
        a{' '}
        <TypeIt
          className='bg-[#ffb800]'
          options={{
            strings: ['software developer'],
            speed: 150,
            startDelay: 900,
            lifeLike: true,
            waitUntilVisible: true,
          }}
        />
        {' who is'}
      </p>
      <p className='mt-[20px] w-4/6 text-center'>
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
  );
};

export default Home;
