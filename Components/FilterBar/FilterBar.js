import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Segment,
  Dropdown,
  Input,
  Icon,
} from 'semantic-ui-react';

import { getFlagByOffice, getSortOptions } from '../../lib/utils';

const sortOptions = getSortOptions();

const FilterBar = ({
  offices,
  // search
  query,
  onSearch,
  // Filter office
  onOfficeSelected,
  selectedOffice,
  // sorting
  sorting,
  onChangeSorting,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const newOptions = offices.map((office) => ({
      key: office,
      value: office,
      flag: getFlagByOffice(office),
      text: office,
    }));

    setOptions([
      {
        key: 'all',
        value: '',
        text: 'Show all',
      },
      ...newOptions,
    ]);
  }, [offices]);

  return (
    <Segment basic>
      <Grid stackable doubling>
        <Grid.Column width={4}>
          <Dropdown
            placeholder="Filter by office"
            fluid
            search
            selection
            options={options}
            value={selectedOffice}
            onChange={onOfficeSelected}
          />
        </Grid.Column>
        <Grid.Column width={4}>
          <Dropdown
            placeholder="Sort"
            fluid
            selection
            value={sorting}
            options={sortOptions}
            onChange={onChangeSorting}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Input
            fluid
            value={query}
            icon={<Icon name="search" inverted circular link />}
            placeholder="Search by name..."
            onChange={onSearch}
          />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

FilterBar.propTypes = {
  offices: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  onChangeSorting: PropTypes.func.isRequired,
  onOfficeSelected: PropTypes.func.isRequired,
  selectedOffice: PropTypes.string.isRequired,
};

export default FilterBar;
