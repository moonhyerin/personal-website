import React from 'react';

const skillCardStyle = {
  backgroundColor: '#D9D9D9',
  borderRadius: '7px',
  padding: '5px',
  margin: '10px',
  display: 'inline-block',
};
const SkillCard = ({ skillName }) => {
  return <span style={skillCardStyle}>{skillName}</span>;
};

export default SkillCard;
