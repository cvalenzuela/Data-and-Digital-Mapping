/*
Alphabet with satellite images
*/

var maps = [];
var divMaps = [];
var inputText;
var characters;

// Alphabet
var alphabet = [
  ['a', -36.88991828221414, 145.18321037292483, 14],
  ['b', -37.75754287769919, 147.62492179870608, 17],
  ['c', -37.83823300000001, 145.031877, 17],
  ['d', -38.31343132843647, 145.14050960540774, 18],
  ['e', -37.840127181120764, 144.8937034606934, 18],
  ['f', -37.80215487042739, 143.93362283706668, 16],
  ['g', -38.06459833899347, 145.1459383964539, 16],
  ['h', 24.439023246080684, 54.647026062011726, 12],
  ['i', -37.84028399999998, 147.83267999999998, 17],
  ['j', -37.81962, 144.965056, 18],
  ['k', -37.906757091272944, 143.36351394653323, 15],
  ['l', -38.056936999999984, 142.4363920000000, 17],
  ['m', -37.89338900000001, 145.1436290000000, 18],
  ['n', -37.99349099999999, 141.72144400000002, 17],
  ['o', 25.688640273567927, 55.73819160461426, 14],
  ['p', -37.804036784023594, 142.04936027526858, 17],
  ['q', 24.107273938622672, 53.13829421997071, 14],
  ['r', -36.63569327442606, 142.95918703079226, 16],
  ['s', -38.20761773627258, 145.38795948028567, 16],
  ['t', -38.04539582160252, 142.32577800750735, 17],
  ['u', -37.73845075903253, 145.51184002579498, 16],
  ['v', -37.84205896246587, 144.99898016452792, 17],
  ['w', -37.89719082010386, 144.74590837955478, 18],
  ['x', -34.25977026910053, 142.05657005310061, 14],
  ['y', -37.84543945807093, 144.9958580732346, 18],
  ['z', -37.814772099168344, 144.9965983629227, 18]
];

//Create the maps
function showMaps(){
  for(var i = 0; i < characters.length; i++){
    if(characters[i] === " ") {
      divMaps[i] = document.createElement('div');
      divMaps[i].className = 'clear';
      document.getElementById('letters').appendChild(divMaps[i]);
    }
    for(var m = 0; m < alphabet.length; m++){
      if(characters[i] == alphabet[m][0]){
        divMaps[i] = document.createElement('div');
        var letter = alphabet[m][0] + i;
        divMaps[i].id = letter;
        divMaps[i].className = 'map';
        document.getElementById('letters').appendChild(divMaps[i]);

        if(travel){
          maps[i] =  L.map(letter, {
            center: [alphabet[getRandomInt()][1], alphabet[getRandomInt()][2]],
            zoom: 11,
            zoomControl: false,
            attributionControl: false,
            closePopupOnClick: false,
            doubleClickZoom: false,
            boxZoom: false,
            dragging: false,
            scrollWheelZoom: false,
            updateWhenZooming: true,
            updateInterval: 300.0,
            updateWhenIdle: true
          });
          maps[i].flyTo([alphabet[m][1], alphabet[m][2]], alphabet[m][3],
            {
              animate: true,
              duration: 30.0,
              easeLinearity: 1
            });
          var randomLocation = getRandomInt();
          background.setView([alphabet[randomLocation][1], alphabet[randomLocation][2]], 12);

        }
        else{
          maps[i] =  L.map(letter, {
            center: [alphabet[m][1], alphabet[m][2]],
            zoom: alphabet[m][3],
            zoomControl: false,
            attributionControl: false,
            closePopupOnClick: false,
            doubleClickZoom: false,
            boxZoom: false,
            dragging: false,
            scrollWheelZoom: false
          });
          background.setView([alphabet[getRandomInt()][1], alphabet[getRandomInt()][2]], 12);

        }

        L.gridLayer.googleMutant({
            type: 'satellite'
        }).addTo(maps[i]);

      }
      else{
        // Do nothing
      }
    }

  }
}

// Get the input from user
function getInput() {
    // Clean all elements
    maps = [];
    divMaps = [];
    var elements = document.getElementsByClassName('map');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    // Input
    inputText = document.getElementById("input").value;
    characters = inputText.split('');
    travel = document.getElementById("travel").checked;
    showMaps();
}

// Listen when Enter is pressed
document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("earthify").click();
    }
});

// Background Map
var background = L.map('backgroundMap', {
  center: [alphabet[0][1], alphabet[0][2]],
  zoom: alphabet[0][3],
  zoomControl: false,
  attributionControl: false,
  closePopupOnClick: false,
  doubleClickZoom: false,
  boxZoom: false,
  dragging: false,
  scrollWheelZoom: false
});

L.gridLayer.googleMutant({
    type: 'satellite'
}).addTo(background);

// Get random integer
function getRandomInt() {
  min = Math.ceil(0);
  max = Math.floor(alphabet.length);
  return Math.floor(Math.random() * (max - min)) + min;
}
