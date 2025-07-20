// example: components/Header.js or inside pages/index.js

import Link from 'next/link'
import styles from './Banner.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/flora name logo.png" alt="Flora Wu logo" className={styles.logoImg} />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="#home">Home</Link>
        <Link href="#about">About Me</Link>
        <Link href="#experience">Work Experience and Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
