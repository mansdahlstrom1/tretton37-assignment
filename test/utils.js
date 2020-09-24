/* global describe, it, before */

import { assert } from 'chai';

import { getUniqueOffices } from '../lib/utils';

const offices = [
  'Lund',
  'Helsingborg',
  'Stockholm',
];

const sortByOfficeName = (a, b) => a.localeCompare(b, 'sv');

const generateMockData = () => {
  const mockNinjas = [];
  for (let i = 0; i < 50; i += 1) {
    mockNinjas.push({
      office: offices[(i + 1) % offices.length],
      id: Math.random().toString(16),
    });
  }

  return mockNinjas;
};

describe('Utils.js', () => {
  describe('Testing getUniqueOffices', async () => {
    let mockNinjas = null;

    before(() => {
      mockNinjas = generateMockData();
    });

    it(`Should return an array of ${offices.length} offices`, async () => {
      const uniqueOffices = getUniqueOffices(mockNinjas)
        .sort(sortByOfficeName);

      const sortedList = offices
        .sort(sortByOfficeName);

      assert.deepEqual(uniqueOffices, sortedList);
    });
  });
});
