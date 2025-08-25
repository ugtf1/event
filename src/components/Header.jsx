// src/components/Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Safe Havens</div>
    <nav>
      <ul className={styles.navList}>
        <li><a href="#features">Features</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </nav>
    <a 
      href="https://eventback2.onrender.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.cta}
    >
      Book Now
    </a>
  </header>
);

export default Header;
