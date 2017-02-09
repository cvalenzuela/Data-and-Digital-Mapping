//===================
// What does studying moves like?
//===================

import map from './map'
import animate from './animation'
import addMarker from './marker'
import showAll from './showall'
import eraseAll from './erase'

// When DOM ready
let loaded = () =>  {
  // Get the buttons
  let animationBtn = document.getElementById('animation');
  let markerBtn = document.getElementById('marker');
  let showAllBtn = document.getElementById('show-all');
  let eraseBtn = document.getElementById('erase');

  // Listen for the elements
  animationBtn.addEventListener('click', animate);
  markerBtn.addEventListener('click', addMarker);
  showAllBtn.addEventListener('click', showAll);
  eraseBtn.addEventListener('click', eraseAll);
}

// On window loaded
window.addEventListener('load',loaded);
