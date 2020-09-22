import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Card,
  Flag,
  Image,
  Icon,
  Ref,
} from 'semantic-ui-react';

import styles from './NinjaCard.module.css';
import { getFlagByOffice } from '../../lib/utils';
import useHover from '../../lib/hooks/useHover';

import Socials from '../Social/Social';

const NinjaCard = ({ ninja }) => {
  const [hoverRef, isHover] = useHover();

  if (!ninja) {
    // TODO render placeholder
    return null;
  }

  return (
    <Ref innerRef={hoverRef}>
      <Card className={styles.overflow}>
        <Image src={ninja.imagePortraitUrl} className={styles.image} />
        <Socials ninja={ninja} active={isHover} />

        <Card.Content>
          <Card.Header>{ninja.name}</Card.Header>
          <Card.Meta>
            <Flag name={getFlagByOffice(ninja.office)} />
            <span className="date">{ninja.office}</span>
          </Card.Meta>
        </Card.Content>

        <Card.Content extra textAlign="right">
          <Link href={`/ninja/${ninja.id}`}>
            <a>
              get to know me
              <Icon style={{ marginLeft: 10 }} name="arrow right" />
            </a>
          </Link>
        </Card.Content>

      </Card>
    </Ref>
  );
};

NinjaCard.propTypes = {
  ninja: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    imagePortraitUrl: PropTypes.string,
  })),
};

NinjaCard.defaultProps = {
  ninja: null,
};

export default NinjaCard;
