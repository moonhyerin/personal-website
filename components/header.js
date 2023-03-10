import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';
// import { Menu, Transition } from '@headlessui/react';

export const siteTitle = "Hyerin's website";
const menus = ['Home', 'About me', 'Working', 'Contact'];

export default function Header({ children, home, isMobile }) {
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
            <Link className={styles.menu} href='#home'>
              Home
            </Link>
            <Link className={styles.menu} href='#aboutme'>
              About me
            </Link>
            <Link className={styles.menu} href='#working'>
              Working
            </Link>
            <Link className={styles.menu} href='#contact'>
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
