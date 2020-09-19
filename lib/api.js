import { sluggify } from './utils';

const BASE_URL = 'https://api.tretton37.com';

const get = async (path, queryParams = {}) => {
  try {
    const res = await fetch(`${BASE_URL}/${path}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const getNinjas = async () => {
  try {
    const ninjas = await get('ninjas');
    return ninjas.map((ninja) => ({
      id: sluggify(ninja.name),
      ...ninja,
    }));
  } catch (err) {
    console.error(err);
  }
};

export const getNinja = async (id) => {
  try {
    const ninja = await get(`ninjas/${id}`);

    return {
      id: sluggify(ninja.name),
      ...ninja,
    };
  } catch (err) {
    console.error(err);
  }
}
