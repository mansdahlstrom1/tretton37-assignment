import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';

import { getNinjas } from '../lib/api';

import NinjaCard from '../Components/NinjaCard/NinjaCard';
import Hero from '../Components/Hero/Hero';
import FilterBar from '../Components/FilterBar/FilterBar';
import { getUniqueOffices, sort } from '../lib/utils';
import { SORT_TYPES } from '../lib/constants';

export default function Home() {
  // Data states
  const [ninjas, setNinjas] = useState([]);
  const [filteredNinjas, setFilteredNinjas] = useState([]);
  const [offices, setOffices] = useState([]);

  // filter states
  const [query, setQuery] = useState('');
  const [selectedOffice, setSelectedOffice] = useState('');
  const [sorting, setSorting] = useState(SORT_TYPES.NAME_ASC);

  useEffect(() => {
    const getTheNinjas = async () => {
      const nin = await getNinjas();
      setNinjas(nin);
      setFilteredNinjas(nin);
      setOffices(getUniqueOffices(nin));
    };

    getTheNinjas();
  }, []);

  useEffect(() => {
    const newNinjas = ninjas.filter(({ name, office }) => {
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
    });

    setFilteredNinjas(newNinjas);
  }, [query, selectedOffice]);

  const onSearch = (_, { value }) => setQuery(value);
  const onOfficeSelected = (_, { value }) => setSelectedOffice(value);

  return (
    <div>
      <Head>
        <title>Meet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Grid columns={3} stackable doubling>
            {filteredNinjas
              .sort(sort(sorting))
              .map((ninja) => (
                <Grid.Column key={ninja.email}>
                  <NinjaCard ninja={ninja} />
                </Grid.Column>
              ))}
          </Grid>
        </Segment>
      </Container>
    </div>
  );
}
