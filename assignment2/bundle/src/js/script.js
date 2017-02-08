'use strict';

/*

My movents in 13 days

cvalenzuelab@nyu.edu
*/

//=====================
// Variables
//====================
var animatioBtn = null,
    markerBtn = null,
    showAllBtn = null,
    erase = null,
    path = null,
    latlngs = null,
    len = route.length,
    animatedMarker = null,
    data = null;

//=====================
// When DOM ready
//====================
var loaded = function loaded() {
  // Get the buttons
  animatioBtn = document.getElementById('animation');
  markerBtn = document.getElementById('marker');
  showAllBtn = document.getElementById('show-all');
  erase = document.getElementById('erase');

  // Listen for the elements
  animatioBtn.addEventListener('click', animate);
  markerBtn.addEventListener('click', addMarker);
  showAllBtn.addEventListener('click', showAll);
  erase.addEventListener('click', eraseAll);
};

//=====================
// Base Map
//====================
var map = L.map('map', {
  zoom: 15,
  center: [40.736770853932505, -73.98880004882814]
  // zoomControl: false,
  // trackResize: false,
  // dragging: false,
  // zoomAnimation: false,
  // scrollWheelZoom: false

});

var baseLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png');
map.addLayer(baseLayer);

//=====================
// Show all Data
//====================
var showAll = function showAll() {

  // Clean everything
  eraseAll();

  data = new L.GeoJSON.AJAX("./data/full/activities.geojson", {
    color: '#FFD002',
    opacity: 0.5,
    weight: 6
  }).addTo(map);
};

//=====================
// Marker
//====================


var addMarker = function addMarker() {

  var customIcon = L.icon({
    iconUrl: 'src/css/icon.png',
    iconSize: [14, 14]
  });

  // Clean everything
  eraseAll();

  for (var i = 0; i < len; i++) {
    latlngs.push(new L.LatLng(route[i][1], route[i][0]));
  }

  path = L.polyline(latlngs, {
    color: '#FF5233',
    opacity: 0.5
  });

  animatedMarker = L.animatedMarker(path.getLatLngs(), {
    distance: 100, // meters
    interval: 200, // milliseconds
    icon: customIcon
  });
  map.addLayer(animatedMarker);
};

//=====================
// Animate
//====================
var animate = function animate() {

  // Clean everything
  eraseAll();

  for (var i = 0; i < len; i++) {
    latlngs.push(new L.LatLng(route[i][1], route[i][0]));
  }

  path = L.polyline(latlngs, {
    snakingSpeed: 80,
    snakingPause: 0,
    color: '#FFD002',
    opacity: 0.5,
    weight: 6
  });

  map.fitBounds(L.latLngBounds(latlngs));
  map.addLayer(path);
  path.snakeIn();
};

//=====================
// Events for paths
//====================
if (path != null) {
  path.on('snakeend', function (ev) {
    console.log('Done!');
  });
}

//=====================
// Erase All
//====================

var eraseAll = function eraseAll() {
  if (path != null) {
    map.removeLayer(path);
  }
  if (animatedMarker != null) {
    map.removeLayer(animatedMarker);
  }
  if (data != null) {
    map.removeLayer(data);
  }
  latlngs = [];
  path = null;
};

// On window loaded
window.addEventListener('load', loaded);
