import { SORT_TYPES } from './constants';

export function getFlagByOffice(office) {
  if (office.toLowerCase() === 'ljubljana') {
    return 'si';
  }
  return 'se';
}

export function getUniqueOffices(ninjas) {
  return ninjas.reduce((acc, ninja) => {
    // get unique offices in an array
    if (!acc.includes(ninja.office)) {
      acc.push(ninja.office);
    }

    return acc;
  }, []);
}

export function sort(value) {
  return (a, b) => {
    if (value === SORT_TYPES.NAME_ASC) {
      return a.name.localeCompare(b.name, 'sv');
    }

    if (value === SORT_TYPES.NAME_DESC) {
      return b.name.localeCompare(a.name, 'sv');
    }

    if (value === SORT_TYPES.OFFICE_ASC) {
      return a.office.localeCompare(b.office, 'sv');
    }

    if (value === SORT_TYPES.OFFICE_DESC) {
      return b.office.localeCompare(a.office, 'sv');
    }

    return 1;
  };
}

export function getSortOptions() {
  const getTextBySortType = {
    [SORT_TYPES.NAME_ASC]: 'Sort by name (Ascending)',
    [SORT_TYPES.NAME_DESC]: 'Sort by name (Descending)',
    [SORT_TYPES.OFFICE_ASC]: 'Sort by office (Ascending)',
    [SORT_TYPES.OFFICE_DESC]: 'Sort by office (Descending)',
  };

  return Object.keys(SORT_TYPES).map((type) => ({
    key: type,
    value: type,
    text: getTextBySortType[type],
  }));
}
