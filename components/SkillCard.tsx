import React from 'react';
import Tooltip from '@mui/material/Tooltip';

import styles from './SkillCard.module.css';

const SkillCard = ({ name, description }) => {
  return (
    <Tooltip title={name} disableFocusListener>
      <span className={styles.skillCardStyle}>{name}</span>
    </Tooltip>
  );
};

export default SkillCard;
