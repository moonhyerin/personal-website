import React from 'react';
import Link from 'next/link';
import { IconButton } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer({ isMobile }) {
  return (
    <div className='flex flex-row justify-center'>
      <div className='flex'>
        <IconButton
          href='https://linkedin.com/in/haileemoon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon fontSize='medium' />
        </IconButton>
        <IconButton
          href='https://github.com/moonhyerin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon fontSize='medium' />
        </IconButton>
        <IconButton
          href='https://www.instagram.com/mnhrin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramIcon fontSize='medium' />
        </IconButton>
      </div>
      {/* <div className='flex flex-col'>
        <Link
          className='font-mono font-bold text-[17px] text-black dark:text-white ml-[60px] mr-[10px] decoration-none hover:no-underline hover:text-shadow shadow-[#ffb800]'
          href='#'
          scroll={false}
        >
          haileemoon.me@gmail.com
        </Link>
      </div> */}
    </div>
  );
}

export default Footer;
