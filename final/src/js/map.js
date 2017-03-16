//=====================
// Base Map
//====================

require('mapbox.js');
var southWest = L.latLng(40.70029233758598, -74.01918411254884),
northEast = L.latLng(40.79743731935726, -73.94159317016603),
mybounds = L.latLngBounds(southWest, northEast);

export var map = L.map('map', {
  zoom: 17,
  center: [40.742365, -73.988259],
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
//map.setMaxBounds(mybounds);
