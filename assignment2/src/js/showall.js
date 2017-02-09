//=====================
// Show all Data
//====================

require('../leaflet-plugins/leaflet.ajax.min.js')

import {map} from './map'
import eraseAll from './erase'

export let data = null;

export default function() {

  // Clean everything
  eraseAll();

  data = new L.GeoJSON.AJAX("./data/full/activities.geojson", {
    color: '#FFD002',
    opacity: 0.5,
    weight: 6
  }).addTo(map);
}
