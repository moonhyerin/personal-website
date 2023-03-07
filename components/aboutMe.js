import React from 'react';
import Image from 'next/image';

import SkillCard from './SkillCard';

import aboutMeStyles from './aboutMe.module.css';

const skillSets = [
  'Javascript',
  'React',
  'Node.js',
  'HTML/CSS',
  'Typescript',
  'Git',
  'GraphQL',
  'MongoDB',
  'Next.js',
  'TDD',
  'Figma',
  'jest',
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
