// components/Banner.js
import { useState } from 'react';
import styles from './Banner.module.css';

export default function Banner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="/flora name logo.png" className={styles.logoImg} alt="Logo" />
        

        {/* Hamburger button */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Nav links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
          <a href="#about">About Me</a>
          <a href="#work">Work Experience and Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
    </header>
  );
}
