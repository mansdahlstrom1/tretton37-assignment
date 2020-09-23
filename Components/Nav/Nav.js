import React from 'react';
import { Icon, Menu, Responsive } from 'semantic-ui-react';

import styles from './Nav.module.css';
import Logo from '../../public/assets/tretton37.svg';

const items = [
  { key: 'Who we are', name: 'Who we are' },
  { key: 'What we do', name: 'What we do' },
  { key: 'Knowledge sharing', name: 'Knowledge sharing' },
  { key: 'Join', name: 'Join' },
  { key: 'Inquire', name: 'Inquire' },
  { key: 'Contact', name: 'Contact' },
];

const Nav = () => (
  <div className={styles.container}>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Logo className={styles.logo} />
      <Menu
        inverted
        borderless
        className={styles.nav}
        style={{ background: 'transparent', marginTop: 20 }}
        stackable
      >
        {items.map(({ key, active, name }) => (
          <Menu.Item key={key} active={active} name={name} />
        ))}
      </Menu>
    </Responsive>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Logo className={styles.logo} />
      <Icon className={styles.mobileNav} name="bars" size="large" color="white" />
    </Responsive>
  </div>
);

export default Nav;
