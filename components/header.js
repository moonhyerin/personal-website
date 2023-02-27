import Head from "next/head";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

export const siteTitle = "Hyerin's website";

export default function Header({ children, home }) {
  return (
    <header className={styles.header}>
      <Link href="https://www.hailee.me/">
        <Image
          priority
          src="/images/logo.png"
          height={50}
          width={50}
          alt="Hyerin's website logo"
        />
      </Link>
      <div>
        <Link className={styles.menu} href="#home">
          Home
        </Link>
        <Link className={styles.menu} href="#aboutme">
          About me
        </Link>
        <Link className={styles.menu} href="#working">
          Working
        </Link>
        <Link className={styles.menu} href="#contact">
          Contact
        </Link>
      </div>
    </header>
  );
}
