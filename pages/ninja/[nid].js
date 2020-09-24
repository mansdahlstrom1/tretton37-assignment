import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import {
  Button,
  Container,
  Grid,
  Header,
  Message,
  Placeholder,
} from 'semantic-ui-react';

import { getNinja } from '../../lib/api';
import Nav from '../../Components/Nav/Nav';

const DetailsPage = () => {
  const router = useRouter();
  const { nid } = router.query;
  const [ninja, setNinja] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleNinja = async (id) => {
      const nin = await getNinja(id);
      if (nin.id === 'apierror') {
        console.log(nin);
        setError(nin);
      } else {
        setNinja(nin);
      }
    };

    if (nid) {
      getSingleNinja(nid);
    }
  }, [nid]);

  return (
    <>
      <Head>
        <title>Meet &#10140; {ninja?.name ?? 'Ninja'}</title>
      </Head>

      <Nav />
      <Container style={{ paddingTop: 150 }}>
        {error && (
          <Message
            error
            header={error.message}
            content={error.url}
          />
        )}
        <Grid>
          <Grid.Column width={10}>
            {ninja ? (
              <>
                <Header
                  as="h2"
                  content={ninja.name}
                  subheader={ninja.email}
                />
                <div dangerouslySetInnerHTML={{ __html: ninja.mainText }} />
              </>
            ) : (
              <Placeholder fluid>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>

                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>

                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>

                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            )}
          </Grid.Column>
          <Grid.Column width={6}>
            {ninja ? (
              <img src={ninja?.imageBodyUrl} alt={`${ninja?.name}-full-body`} />
            ) : (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            )}
          </Grid.Column>
        </Grid>
        <Button onClick={() => router.back()}>
          Go back
        </Button>
      </Container>
    </>
  );
};

export default DetailsPage;
