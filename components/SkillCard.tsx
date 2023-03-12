import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const skillCardStyle = {
  backgroundColor: '#D9D9D9',
  borderRadius: '7px',
  padding: '5px',
  margin: '10px',
  display: 'inline-block',
};

const SkillCard = ({ name, description }) => {
  return (
    <Tooltip title={description} disableFocusListener>
      <span style={skillCardStyle}>{name}</span>
    </Tooltip>
  );
};

export default SkillCard;
