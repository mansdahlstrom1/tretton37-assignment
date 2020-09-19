import React from 'react';
import Nav from '../Nav/Nav';

import styles from './Header.module.css';

const Header = () => (
  <div>
    <Nav />

    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>meet our colleagues</h1>
        <h4 className={styles.subtitle}>a family of handpicked specialists</h4>
      </div>
    </div>
  </div>
);

export default Header;
