import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Container,
  Grid,
  Header,
  Message,
  Placeholder,
} from 'semantic-ui-react';

import { getNinja } from '../../lib/api';

const DetailsPage = () => {
  const router = useRouter();
  const { nid } = router.query;
  const [loading, setLoading] = useState(true);
  const [ninja, setNinja] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleNinja = async (id) => {
      setLoading(true);
      const nin = await getNinja(id);
      if (nin.id === 'apierror') {
        console.log(nin);
        setError(nin);
        setLoading(false);
      } else {
        setNinja(nin);
        setLoading(false);
      }
    };

    console.log(router.query);

    if (nid) {
      getSingleNinja(nid);
    } else {
      router.push('/');
    }
  }, []);

  return (
    <Container style={{ marginTop: 100 }}>
      {error && (
        <Message
          error
          header={error.message}
          content={error.url}
        />
      )}
      <Grid>
        <Grid.Column width={10}>
          <Header
            as="h2"
            content={ninja?.name}
            subheader={ninja?.email}
          />
          <div dangerouslySetInnerHTML={{ __html: ninja?.mainText }} />
        </Grid.Column>
        <Grid.Column width={6}>
          <img src={ninja?.imageBodyUrl} />
        </Grid.Column>
      </Grid>
      <Button onClick={() => router.back()}>
        Go back
      </Button>

    </Container>
  );
};

export default DetailsPage;