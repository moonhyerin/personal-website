import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';

export const siteTitle = "Hyerin's website";

export default function Header({ isMobile }) {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeToggle = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <LightModeIcon
          className='p-[7px] rounded-[20px] hover:bg-[rgb(100,100,100)] hover:cursor-pointer'
          fontSize='large'
          onClick={() => setTheme('light')}
        />
      );
    }
    return (
      <DarkModeIcon
        className='p-[7px] rounded-[20px] hover:bg-[#f1f2f0] hover:cursor-pointer'
        fontSize='large'
        onClick={() => setTheme('dark')}
      />
    );
  };

  const changeLanguage = () => {};

  return (
    <div className='flex flex-row items-center justify-between p-[10px] fixed top-0 w-[100%] bg-neutral-50/[.8] dark:bg-[#4a4a4a]/[.8]'>
      <Link href='https://www.hailee.me/'>
        <Image
          priority
          src='/images/logo.png'
          height={50}
          width={50}
          alt="Hyerin's website logo"
        />
      </Link>
      <div>
        {!isMobile && (
          <>
            {[
              ['Home', '#home'],
              ['About me', '#aboutme'],
              ['Working', '#working'],
              ['Contact', '#contact'],
            ].map(([title, url]) => (
              <Link
                className=' font-mono font-bold text-[17px] text-black dark:text-white ml-[60px] mr-[10px] decoration-none hover:italic'
                href={url}
                scroll={false}
              >
                {title}
              </Link>
            ))}
          </>
        )}
      </div>
      <div className='flex'>
        {renderThemeToggle()}
        {/* <LanguageIcon
          className='p-[7px] rounded-[20px] hover:bg-[#f1f2f0] dark:hover:bg-[rgb(100,100,100)] hover:cursor-pointer'
          fontSize='large'
          onClick={changeLanguage}
        /> */}
      </div>
    </div>
  );
}
