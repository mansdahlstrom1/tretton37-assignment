import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Grid } from 'semantic-ui-react';

import styles from './NinjaCard.module.css';

const NinjaCard = ({ ninja }) => {
  const router = useRouter();

  if (!ninja) {
    // TODO render placeholder
    return null;
  }

  const goToDetails = () => {
    router.push({
      pathname: `/ninja/${ninja.id}`,
    });
  };

  console.log(ninja);

  return (
    <div className={styles.card}>
      <Grid>
        <Grid.Column width="8">
          <img className={styles.image} src={ninja.imagePortraitUrl} alt={`${ninja.name}-avatar`} />
        </Grid.Column>
        <Grid.Column width="8" className={styles.textContainer}>
          <h3 className={styles.name}>{ninja.name}</h3>
          <Button
            size="small"
            className={styles.button}
            onClick={goToDetails}
          >
            Get to know me
          </Button>
        </Grid.Column>
      </Grid>
    </div>
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
