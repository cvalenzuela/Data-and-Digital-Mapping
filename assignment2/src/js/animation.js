//=====================
// Animate
//====================

require('../leaflet-plugins/L.Polyline.SnakeAnim.js')

import {route} from './route'
import {map} from './map'
import eraseAll from './erase'

export let path = null;
let latlngs = [], len = route.length;

for (let i = 0; i < len; i++) {
  latlngs.push(new L.LatLng(route[i][1], route[i][0]));
}

export default function()  {

  eraseAll();

  path = L.polyline(latlngs, {
    snakingSpeed: 80,
    snakingPause: 0,
    color: '#FFD002',
    opacity: 0.7,
    weight: 6
  });

  map.fitBounds(L.latLngBounds(latlngs));
  map.addLayer(path);
  path.snakeIn();
}

// Events for paths
// if(path != null){
//   path.on('snakeend', function(ev){
//     console.log('Done!');
//   });
// }
