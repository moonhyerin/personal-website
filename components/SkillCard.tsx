import React from 'react';
import Tooltip from '@mui/material/Tooltip';

import styles from './SkillCard.module.css';

const SkillCard = ({ name, description }) => {
  return (
    <Tooltip title={name} disableFocusListener>
      <span className='bg-[#d9d9d9] dark:bg-white dark:text-black rounded-[7px] p-[5px] m-[10px] inline-block'>
        {name}
      </span>
    </Tooltip>
  );
};

export default SkillCard;
