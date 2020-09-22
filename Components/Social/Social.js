import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';

import styles from './Social.module.css';

const Socials = ({ ninja, active }) => {
  const { transform, opacity } = useSpring({
    opacity: active ? 0 : 1,
    transform: `translateX(${active ? 0 : 50}px)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const socials = [
    {
      available: !!ninja.linkedIn,
      handle: `https://www.linkedin.com${ninja.linkedIn}`,
      iconName: 'linkedin',
    },
    {
      available: !!ninja.gitHub,
      handle: `https://www.github.com/${ninja.gitHub}`,
      iconName: 'github',
    },
    {
      available: !!ninja.stackOverflow,
      handle: `https://www.stackoverflow.com/users/${ninja.stackOverflow}`,
      iconName: 'stack overflow',
    },
    {
      available: !!ninja.twitter,
      handle: `https://www.twitter.com/${ninja.twitter}`,
      iconName: 'twitter',
    },
  ];

  const noIcons = socials.reduce((acc, { available }) => acc && !available, true);
  if (noIcons) {
    console.warn(`Cannot render icons for ${ninja.name}`);
    return null;
  }

  return (
    <animated.div
      className={styles.container}
      style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
    >
      {socials.map(({
        available,
        baseUrl,
        handle,
        iconName,
      }) => {
        if (!available) {
          return null;
        }
        return (
          <a key={handle} href={handle} target="_blank" rel="noreferrer">
            <Icon name={iconName} size="large" />
          </a>
        );
      })}
    </animated.div>
  );
};

Socials.propTypes = {
  ninja: PropTypes.objectOf(PropTypes.any).isRequired,
  active: PropTypes.bool.isRequired,
};

export default Socials;
