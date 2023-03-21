import React from 'react';
import Image from 'next/image';
import SkillCard from './SkillCard';

import aboutMeStyles from './AboutMePage.module.css';

const skillSets = {
  Javascript: 'Javascript',
  Typescript: 'Typescript',
  React: 'React',
  Redux: 'test',
  'Node.js': 'test',
  'HTML/CSS': 'test',
  SCSS: 'test',
  Git: 'test',
  GraphQL: 'test',
  MongoDB: 'test',
  'Next.js': 'test',
  TDD: 'test',
  Figma: 'test',
  Jest: 'test',
  Cypress: 'test',
  Java: 'test',
  Spring: 'test',
  OracleDB: 'test',
};

export default function AboutMe() {
  return (
    <div className={aboutMeStyles.aboutMe}>
      <Image
        className={aboutMeStyles.profile}
        src='/images/profile.jpg'
        width={310}
        height={470}
        alt=''
      />
      <div className={aboutMeStyles.skills}>
        {Object.keys(skillSets).map((skill) => (
          <SkillCard key={skill} name={skill} description={skillSets[skill]} />
        ))}
      </div>
    </div>
  );
}
