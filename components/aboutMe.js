import React from 'react';
import Image from 'next/image';

import SkillCard from './SkillCard';

import aboutMeStyles from './aboutMe.module.css';

const skillSets = [
  'Javascript',
  'Typescript',
  'React',
  'Redux',
  'Node.js',
  'HTML/CSS',
  'SCSS',
  'Git',
  'GraphQL',
  'MongoDB',
  'Next.js',
  'TDD',
  'Figma',
  'Jest',
  'Cypress',
  'Java',
  'Spring',
  'OracleDB',
];

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
        {skillSets.map((skill) => (
          <SkillCard skillName={skill} />
        ))}
      </div>
    </div>
  );
}
