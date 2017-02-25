// BaseMap and Layer
var base_layer = L.tileLayer('https://api.mapbox.com/styles/v1/cvalenzuela/cizlkagzy00142smyadtagds5/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3ZhbGVuenVlbGEiLCJhIjoiY2l2ZzkweTQ3MDFuODJ5cDM2NmRnaG4wdyJ9.P_0JJXX6sD1oX2D0RQeWFA');
var map = L.map('map', {
    center: [40.7246342, -73.9427715],
    zoom: 13,
    minZoom: 13
});

map.addLayer(base_layer);

// Schools Layer
var SAT_Math_AvgScore = L.geoJson(null, {
  pointToLayer: function(feature, latlng){
    return new L.CircleMarker(latlng, {
      radius: getRadius(feature.properties.Num_of_SAT_Test_Takers, 6, 1277, 4, 25),
      color: getColor(feature.properties.SAT_Math_AvgScore),
      stroke: false,
      fillOpacity: 0.7
    })
  },
  onEachFeature(feature, layer){
    layer.bindPopup("<strong>Average Math</strong>:" + "</br>" + String(feature.properties.SAT_Math_AvgScore))
  }
});

var SAT_Critical_Reading_AvgScore = L.geoJson(null, {
  pointToLayer: function(feature, latlng){
    return new L.CircleMarker(latlng, {
      radius: getRadius(feature.properties.Num_of_SAT_Test_Takers, 6, 1277, 4, 25),
      color: getColor(feature.properties.SAT_Critical_Reading_AvgScore),
      stroke: false,
      fillOpacity: 0.7
    })
  },
  onEachFeature(feature, layer){
    layer.bindPopup("<strong>Average Critical Reading</strong>:" + "</br>" + String(feature.properties.SAT_Math_AvgScore))
  }
});

var SAT_Writing_AvgScore = L.geoJson(null, {
  pointToLayer: function(feature, latlng){
    return new L.CircleMarker(latlng, {
      radius: getRadius(feature.properties.Num_of_SAT_Test_Takers, 6, 1277, 4, 25),
      color: getColor(feature.properties.SAT_Critical_Reading_AvgScore),
      stroke: false,
      fillOpacity: 0.7
    })
  },
  onEachFeature(feature, layer){
    layer.bindPopup("<strong>Average Writting</strong>:" + "</br>" + String(feature.properties.SAT_Math_AvgScore))
  }
});

// Legend
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
  grades = [0, 200, 300, 400, 500, 600],
  labels = [];
  div.innerHTML = '<p>Average SAT Results</p>'
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(map);

// Get color for a school
function getColor(d) {
  try {
    return  d > 800 ? '#1a9850' :
            d > 700 ? '#66bd63' :
            d > 600 ? '#a6d96a' :
            d > 500 ? '#d9ef8b' :
            d > 400 ? '#fee08b' :
            d > 300 ? '#fdae61' :
            d > 200 ? '#f46d43' :
            d > 100 ? '#d73027' :
            '#d73027';
  }
  catch (err){
    console.log(err)
  }


}

// Get radius for a school
function getRadius(value, low1, high1, low2, high2) {
  try{
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }
  catch (err){
    console.log(err);
  }

}

// Layer control
function changeLayer(type){
  if(type === 'math'){
    map.eachLayer(function (layer) {
      if(layer != base_layer){
        map.removeLayer(layer);
      }
    });
    var math = omnivore.csv('data/schools_latlon.csv', null, SAT_Math_AvgScore ).addTo(map);
  }
  else if(type === 'reading'){
    map.eachLayer(function (layer) {
      if(layer != base_layer){
        map.removeLayer(layer);
      }
    });
    var reading = omnivore.csv('data/schools_latlon.csv', null, SAT_Critical_Reading_AvgScore ).addTo(map);
  }
  else if(type === 'writing'){
    map.eachLayer(function (layer) {
      if(layer != base_layer){
        map.removeLayer(layer);
      }
    });
    var writing = omnivore.csv('data/schools_latlon.csv', null, SAT_Writing_AvgScore ).addTo(map);
  }

}

// Add schools layer to the map
// var math = omnivore.csv('../../data/schools_latlon.csv', null, SAT_Math_AvgScore ).addTo(map);
// var reading = omnivore.csv('../../data/schools_latlon.csv', null, SAT_Critical_Reading_AvgScore ).addTo(map);
// var writing = omnivore.csv('../../data/schools_latlon.csv', null, SAT_Writing_AvgScore ).addTo(map);
