import React from 'react';

import styles from './Hero.module.css';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.container}>
      <h1 className={styles.title}>meet our colleagues</h1>
      <h4 className={styles.subtitle}>a family of handpicked specialists</h4>
    </div>
  </div>
);

export default Hero;
