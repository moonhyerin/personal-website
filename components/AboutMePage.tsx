import React from 'react';
import Image from 'next/image';
import SkillCard from './SkillCard';

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
    <div className='md:h-screen flex flex-col md:flex-row items-center justify-center'>
      <Image
        className='rounded-full'
        src='/images/profile.jpg'
        width={310}
        height={470}
        alt=''
      />
      <div className='w-5/6 md:w-3/6 my-10 md:my-0 md:ml-5 cursor-pointer'>
        {Object.keys(skillSets).map((skill) => (
          <SkillCard key={skill} name={skill} description={skill} />
        ))}
      </div>
    </div>
  );
}
