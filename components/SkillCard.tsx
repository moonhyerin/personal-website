import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const SkillCard = ({ name, description }) => {
  return (
    <Tooltip title={name} disableFocusListener>
      <span className='bg-[#d9d9d9] dark:bg-white dark:text-black hover:bg-[#a0a0a0] hover:dark:bg-[#fcf2d4] rounded-[7px] p-[5px] m-[10px] inline-block'>
        {name}
      </span>
    </Tooltip>
  );
};

export default SkillCard;
