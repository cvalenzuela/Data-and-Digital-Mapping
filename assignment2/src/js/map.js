//=====================
// Base Map
//====================

require('mapbox.js');

export let map = L.map('map', {
  zoom: 15,
  center: [ 40.736770853932505,-73.98880004882814,]
  // zoomControl: false,
  // trackResize: false,
  // dragging: false,
  // zoomAnimation: false,
  // scrollWheelZoom: false
});

var baseLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png');
map.addLayer(baseLayer);
