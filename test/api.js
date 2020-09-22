/* global describe, it */

import { assert } from 'chai';

import { getNinjas, getNinja } from '../lib/api';
import { sluggify } from '../lib/sluggify';

describe('API', () => {
  describe('API endpoint /ninjas', async () => {
    it('Should return an array of ninjas', async () => {
      const ninjas = await getNinjas();
      assert.isArray(ninjas);
      assert.isAtLeast(ninjas.length, 1);
    });

    it('Should generate a valid id', async () => {
      const ninjas = await getNinjas();
      const { id, name } = ninjas[0];

      assert.isDefined(id);
      assert.equal(id, sluggify(name));
    });

    it('ID should be valid for fetching a single ninja', async () => {
      const ninjas = await getNinjas();
      const { id } = ninjas[0];

      const ninja = await getNinja(id);

      assert.exists(ninja);
      assert.equal(ninja.id, id);
    });
  });

  describe('API endpoint /ninja', async () => {
    const ninjaId = 'pontus-molin';

    it('Should return an a single ninja given a valid ID', async () => {
      const ninja = await getNinja(ninjaId);
      assert.exists(ninja);
      assert.equal(ninja.id, ninjaId);
    });

    it('Should throw and Error if ID is omitted', async () => {
      const error = await getNinja();

      assert.equal(error instanceof Error, true);
    });

    it('It should give an API Error when provided an invalid ID', async () => {
      const badId = 'bad-id';
      const error = await getNinja(badId);

      assert.equal(error.statusCode, 400);
    });
  });
});
