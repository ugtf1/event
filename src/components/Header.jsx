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
    <button className={styles.cta}>Book Now</button>
  </header>
);

export default Header;
