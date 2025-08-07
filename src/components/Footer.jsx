import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p className={styles.text}>
                &copy; {new Date().getFullYear()} Party Tent Demo. All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;