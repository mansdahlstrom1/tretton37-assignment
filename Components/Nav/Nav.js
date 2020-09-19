import React from 'react';
import { Menu } from 'semantic-ui-react';

import styles from './Nav.module.css';

const items = [
  { key: 'Who we are', name: 'Who we are' },
  { key: 'What we do', name: 'What we dos' },
  { key: 'Knowledge sharing', name: 'Knowledge sharing' },
  { key: 'Join', name: 'Join' },
  { key: 'Inquire', name: 'Inquire' },
  { key: 'Contact', name: 'Contact' },
];

const Nav = () => (
  <div className={styles.container}>
    <img className={styles.logo} src="/assets/tretton37.svg" alt="tretton37 logo" />
    <Menu
      inverted
      borderless
      className={styles.nav}
      style={{ background: 'transparent' }}
      stackable
    >
      {items.map(({ key, active, name }) => (
        <Menu.Item key={key} active={active} name={name} />
      ))}
    </Menu>
  </div>
);

export default Nav;
