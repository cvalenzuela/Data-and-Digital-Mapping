//=====================
// Base Map
//====================

require('mapbox.js');
var southWest = L.latLng(40.821603959162374, -73.89575958251955),
northEast = L.latLng(40.69157226543675, -74.06742095947267),
mybounds = L.latLngBounds(southWest, northEast);

export var map = L.map('map', {
  zoom: 17,
  center: [40.716403, -74.005452],
  // zoomControl: false,
  // trackResize: false,
  // dragging: false,
  // zoomAnimation: false,
  // scrollWheelZoom: false
  maxZoom: 17,
  minZoom: 13,
});


var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/cvalenzuela/cj0adk64v00072rnovq5jmvpz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3ZhbGVuenVlbGEiLCJhIjoiY2l2ZzkweTQ3MDFuODJ5cDM2NmRnaG4wdyJ9.P_0JJXX6sD1oX2D0RQeWFA');
map.addLayer(satellite);
map.setMaxBounds(mybounds);
