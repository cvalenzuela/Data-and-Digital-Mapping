//=====================
// Marker
//====================

require('../leaflet-plugins/AnimatedMarker.js')

import {map} from './map'
import {route} from './route'
import eraseAll from './erase'

export let animatedMarker = null;

let path = null, latlngs = [], len = route.length;

for (let i = 0; i < len; i++) {
  latlngs.push(new L.LatLng(route[i][1], route[i][0]));
}

export default function() {

  eraseAll();

  let customIcon = L.icon({
    iconUrl: 'src/css/icon.png',
    iconSize: [14,14]
  });

  path = L.polyline(latlngs, {
    color: '#FF5233',
    opacity: 0.5
  });

  animatedMarker = L.animatedMarker(path.getLatLngs(), {
    distance: 100 ,  // meters
    interval: 200, // milliseconds
    icon: customIcon
  });
  map.addLayer(animatedMarker);
}
