import React from "react";

const skillCardStyle = {
  backgroundColor: "#D9D9D9",
  borderRadius: "5px",
  padding: "3px",
  margin: "5px",
  display: "inline-block",
};
const SkillCard = ({ skillName }) => {
  return <span style={skillCardStyle}>{skillName}</span>;
};

export default SkillCard;
