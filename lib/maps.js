/* global fetch */
const fs = require('fs');

const BASE_URL = 'https://maps.googleapis.com/maps/api/staticmap';
const API_KEY = 'AIzaSyA9QMDorpo7ZXPXwf0p36CFc-cWbOhoUQc';
const lat = 55.70498197044364; // Lund
const long = 13.188887797686032; // Lund
const zoom = 14;
const size = '480x360';
const maptype = 'roadmap';

const styles = [
  'element:geometry|color:0xf5f5f5',
  'element:labels|visibility:off',
  'element:labels.icon|visibility:off',
  'element:labels.text.fill|color:0x616161',
  'element:labels.text.stroke|color:0xf5f5f5',
  'feature:administrative.land_parcel|visibility:off',
  'feature:administrative.land_parcel|element:labels.text.fill|color:0xbdbdbd',
  'feature:administrative.neighborhood|visibility:off',
  'feature:poi|element:geometry|color:0xeeeeee',
  'feature:poi|element:labels.text.fill|color:0x757575',
  'feature:poi.park|element:geometry|color:0xe5e5e5',
  'feature:poi.park|element:labels.text.fill|color:0x9e9e9e',
  'feature:road|element:geometry|color:0xffffff',
  'feature:road.arterial|element:labels|visibility:off',
  'feature:road.arterial|element:labels.text.fill|color:0x757575',
  'feature:road.highway|element:geometry|color:0xdadada',
  'feature:road.highway|element:labels|visibility:off',
  'feature:road.highway|element:labels.text.fill|color:0x616161',
  'feature:road.local|visibility:off',
  'feature:road.local|element:labels.text.fill|color:0x9e9e9e',
  'feature:transit.line|element:geometry|color:0xe5e5e5',
  'feature:transit.station|element:geometry|color:0xeeeeee',
  'feature:water|element:geometry|color:0xc9c9c9',
  'feature:water|element:labels.text.fill|color:0x9e9e9e',
].join('&style=');

const getMap = async () => {
  const url = `${BASE_URL}?key=${API_KEY}&center=${lat},${long}&zoom=${zoom}&size=${size}&maptype=${maptype}`;

  const res = await fetch(url + styles);
  if (res.status === 200) {
    fs.writeFile('test.png', res.body);
  }
};

getMap();

// export default getMap;
