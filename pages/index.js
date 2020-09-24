import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import {
  Container,
  Grid,
  Loader,
  Segment,
} from 'semantic-ui-react';

import { getNinjas } from '../lib/api';

import NinjaCard from '../Components/NinjaCard/NinjaCard';
import Hero from '../Components/Hero/Hero';
import FilterBar from '../Components/FilterBar/FilterBar';
import { getUniqueOffices, sort } from '../lib/utils';
import { SORT_TYPES } from '../lib/constants';
import Nav from '../Components/Nav/Nav';

export default function Home() {
  // Data states
  const [loading, setLoading] = useState(false);
  const [ninjas, setNinjas] = useState([]);

  // filter states
  const [query, setQuery] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [sorting, setSorting] = useState(SORT_TYPES.NAME_ASC);

  useEffect(() => {
    const getTheNinjas = async () => {
      setLoading(true);
      const nin = await getNinjas();
      setNinjas(nin);
      setLoading(false);
    };

    getTheNinjas();
  }, []);

  const onSearch = (_, { value }) => setQuery(value);
  const onOfficeSelected = (_, { value }) => setSelectedOffice(value);

  const filteredNinjas = useMemo(() => ninjas.filter(({ name, office }) => {
    if (query === '' && selectedOffice === '') {
      return true;
    }

    if (selectedOffice !== '' && selectedOffice !== office) {
      return false;
    }

    if (query !== '' && name.toLowerCase().indexOf(query.toLowerCase()) === -1) {
      return false;
    }

    return true;
  }), [ninjas, query, selectedOffice, sorting]);

  const offices = useMemo(() => getUniqueOffices(ninjas), [ninjas]);

  return (
    <div style={{ background: '#efefef', minHeight: '100vh' }}>
      <Head>
        <title>Meet</title>
      </Head>

      <Nav />
      <Hero />
      <Container style={{ marginTop: 30 }}>
        <FilterBar
          ninjas={filteredNinjas}
          onOfficeSelected={onOfficeSelected}
          onSearch={onSearch}
          offices={offices}
          selectedOffice={selectedOffice}
          sorting={sorting}
          query={query}
          onChangeSorting={(_, { value }) => setSorting(value)}
        />
        <Segment basic>
          <p>Showing: {filteredNinjas.length} / {ninjas.length} ninjas</p>
          <Grid columns={5} stackable doubling stretched>
            {filteredNinjas
              .sort(sort(sorting))
              .map((ninja) => (
                <Grid.Column key={ninja.email}>
                  <NinjaCard ninja={ninja} />
                </Grid.Column>
              ))}
          </Grid>
          <Loader active={loading} />
        </Segment>
      </Container>
    </div>
  );
}
