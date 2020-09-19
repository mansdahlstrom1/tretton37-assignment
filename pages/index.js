import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Grid } from 'semantic-ui-react';
import { getNinjas } from '../lib/api';

import NinjaCard from '../Components/NinjaCard/NinjaCard';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    const getTheNinjas = async () => {
      setLoading(true);
      const nin = await getNinjas();
      setNinjas(nin.slice(0, 20));
      setLoading(false);
    };

    getTheNinjas();
  }, []);

  return (
    <div>
      <Head>
        <title>Meet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ marginTop: 30 }}>
        <Grid columns={3}>
          {ninjas.map((ninja) => (
            <Grid.Column key={ninja.email}>
              <NinjaCard ninja={ninja} />
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
