import fetch from 'isomorphic-fetch';
import { sluggify } from './sluggify';

const BASE_URL = 'https://api.tretton37.com';

class APIError extends Error {
  constructor(message, statusCode, url) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
    this.url = url;
  }

  toObject() {
    return {
      name: this.name,
      statusCode: this.statusCode,
      message: this.message,
      url: this.url,
    };
  }
}

const get = async (path) => {
  const res = await fetch(`${BASE_URL}/${path}`);

  if (res.status !== 200) {
    const message = await res.text();
    throw new APIError(message, res.status, res.url);
  }

  return res.json();
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
    return err.toObject();
  }
};

export const getNinja = async (id) => {
  try {
    if (!id) {
      throw new Error("Missing required parameter 'id'");
    }

    const ninja = await get(`ninjas/${id}`);

    return {
      id: sluggify(ninja.name),
      ...ninja,
    };
  } catch (err) {
    console.error(err);
    if (err instanceof APIError) {
      return err.toObject();
    }
    return err;
  }
};
