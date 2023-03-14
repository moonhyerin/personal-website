import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import styles from './SkillCard.module.css';

const SkillCard = ({ name, description }) => {
  return (
    <Tooltip title={description} disableFocusListener>
      <span className={styles.skillCardStyle}>{name}</span>
    </Tooltip>
  );
};

export default SkillCard;
