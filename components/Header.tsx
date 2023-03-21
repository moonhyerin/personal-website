import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.css';

export const siteTitle = "Hyerin's website";

export default function Header({ isMobile }) {
  return (
    <header className={styles.header}>
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
        {/* <Image src="/images/brightness.png" height={20} width={20} />
        <Image src="/images/globe.png" height={20} width={20} /> */}
      </div>
    </header>
  );
}
