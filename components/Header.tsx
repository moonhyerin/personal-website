import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

export const siteTitle = "Hyerin's website";

export default function Header({ isMobile }) {
  const changeDarkmode = () => {};

  const changeLanguage = () => {};

  return (
    <div className={styles.header}>
      <Link href='https://www.hailee.me/'>
        <Image
          priority
          src='/images/logo.png'
          height={50}
          width={50}
          alt="Hyerin's website logo"
        />
      </Link>
      <div className={styles.navigation}>
        {!isMobile && (
          <>
            <Link className={styles.menu} href='#home' scroll={false}>
              Home
            </Link>
            <Link className={styles.menu} href='#aboutme' scroll={false}>
              About me
            </Link>
            <Link className={styles.menu} href='#working' scroll={false}>
              Working
            </Link>
            <Link className={styles.menu} href='#contact' scroll={false}>
              Contact
            </Link>
          </>
        )}
      </div>
      <div className={styles.setting}>
        <Image
          src='/images/darkmode.png'
          height={35}
          width={35}
          alt=''
          onClick={changeDarkmode}
        />
        <Image
          src='/images/lang.png'
          height={35}
          width={35}
          alt=''
          onClick={changeLanguage}
        />
      </div>
    </div>
  );
}
